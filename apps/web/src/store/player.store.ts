import { create } from "zustand";

export type Song = {
  id: string;
  title: string;
  artist: string;
  imageUrl: string;
  audioUrl: string;
  duration: number;
};

type PlayerState = {
  currentSong: Song | null;
  isPlaying: boolean;
  audio: HTMLAudioElement | null;

  currentTime: number;
  duration: number;

  rafId: number | null;

  queue: Song[];
  currentIndex: number;

  isShuffle: boolean;
  repeatMode: "off" | "one" | "all";

  playSong: (song: Song) => void;
  togglePlay: () => void;
  seek: (time: number) => void;

  setQueue: (songs: Song[], startIndex?: number) => void;
  playNext: () => void;
  playPrev: () => void;

  toggleShuffle: () => void;
  toggleRepeat: () => void;
};

export const usePlayerStore = create<PlayerState>((set, get) => ({
  currentSong: null,
  isPlaying: false,
  audio: null,

  currentTime: 0,
  duration: 0,

  rafId: null,

  queue: [],
  currentIndex: -1,

  isShuffle: false,
  repeatMode: "off",

  playSong: (song) => {
    const { audio, rafId } = get();

    // cleanup old audio + RAF
    if (audio) {
      audio.pause();
      audio.src = "";
    }

    if (rafId) {
      cancelAnimationFrame(rafId);
    }

    const audioRef = new Audio(song.audioUrl);

    const sync = () => {
      const current = audioRef.currentTime;

      set({ currentTime: current });

      const newRaf = requestAnimationFrame(sync);
      set({ rafId: newRaf });
    };

    audioRef.onloadedmetadata = () => {
      const dur = audioRef.duration;

      if (!isNaN(dur) && dur > 0) {
        set({ duration: dur });
      }
    };

    audioRef.onplay = () => {
      const newRaf = requestAnimationFrame(sync);
      set({ rafId: newRaf });
    };

    audioRef.onpause = () => {
      const { rafId } = get();
      if (rafId) cancelAnimationFrame(rafId);
    };

    audioRef.onended = () => {
      const { rafId, playNext } = get();

      if (rafId) cancelAnimationFrame(rafId);

      playNext();
    };

    audioRef.play();

    set({
      currentSong: song,
      isPlaying: true,
      audio: audioRef,
      currentTime: 0,
      duration: song.duration,
    });
  },

  togglePlay: () => {
    const { audio, isPlaying } = get();
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    set({ isPlaying: !isPlaying });
  },

  seek: (time) => {
    const { audio } = get();
    if (!audio) return;

    audio.currentTime = time;

    set({ currentTime: time });
  },

  setQueue: (songs, startIndex = 0) => {
    if (!songs.length) return;

    set({
      queue: songs,
      currentIndex: startIndex,
    });

    const song = songs[startIndex];

    if (song) {
      get().playSong(song);
    }
  },

  playNext: () => {
    const { queue, currentIndex, isShuffle, repeatMode } = get();

    if (!queue.length) return;

    // 🔁 repeat one
    if (repeatMode === "one") {
      const currentSong = queue[currentIndex];
      if (currentSong) get().playSong(currentSong);
      return;
    }

    let nextIndex: number;

    // 🔀 shuffle
    if (isShuffle) {
      do {
        nextIndex = Math.floor(Math.random() * queue.length);
      } while (queue.length > 1 && nextIndex === currentIndex);
    } else {
      nextIndex = currentIndex + 1;
    }

    // 🔁 repeat all
    if (nextIndex >= queue.length) {
      if (repeatMode === "all") {
        nextIndex = 0;
      } else {
        return;
      }
    }

    const nextSong = queue[nextIndex];
    if (!nextSong) return;

    set({ currentIndex: nextIndex });

    get().playSong(nextSong);
  },

  playPrev: () => {
    const { queue, currentIndex } = get();

    if (!queue.length) return;

    const prevIndex = currentIndex - 1;

    if (prevIndex < 0) return;

    const prevSong = queue[prevIndex];
    if (!prevSong) return;

    set({ currentIndex: prevIndex });

    get().playSong(prevSong);
  },

  toggleShuffle: () => {
    set((state) => ({
      isShuffle: !state.isShuffle,
    }));
  },

  toggleRepeat: () => {
    const current = get().repeatMode;

    const next =
      current === "off"
        ? "all"
        : current === "all"
        ? "one"
        : "off";

    set({ repeatMode: next });
  },
}));