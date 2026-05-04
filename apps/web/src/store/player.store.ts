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

  playSong: (song: Song) => void;
  togglePlay: () => void;
};

export const usePlayerStore = create<PlayerState>((set, get) => ({
  currentSong: null,
  isPlaying: false,
  audio: null,

  playSong: (song) => {
    let audio = get().audio;

    // create audio instance if not exists
    if (!audio) {
      audio = new Audio();
    }

    // change source + play
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
}));
