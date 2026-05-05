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

  playSong: (song) => {
    let audio = get().audio;

    if (!audio) {
      audio = new Audio();

      const audioRef = audio; 

      audioRef.ontimeupdate = () => {
        set({
          currentTime: audioRef.currentTime,
          duration: audioRef.duration || 0,
        });
      };

      audioRef.onended = () => {
        set({ isPlaying: false });
      };
    }

    audio.src = song.audioUrl;
    audio.play();

    set({
      currentSong: song,
      isPlaying: true,
      audio,
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