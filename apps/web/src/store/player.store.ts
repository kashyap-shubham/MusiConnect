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

  playSong: (song: Song) => void;
  togglePlay: () => void;
  seek: (time: number) => void;
};

export const usePlayerStore = create<PlayerState>((set, get) => ({
  currentSong: null,
  isPlaying: false,
  audio: null,

  currentTime: 0,
  duration: 0,

  rafId: null,

  playSong: (song) => {
    const { audio, rafId } = get();

    
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

      set({
        currentTime: current,
      });

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
      const { rafId } = get();
      if (rafId) cancelAnimationFrame(rafId);

      set({
        isPlaying: false,
        currentTime: 0,
      });
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

    set({
      currentTime: time,
    });
  },
}));