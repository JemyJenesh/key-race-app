import create from "zustand/react";

export const useStore = create((set) => ({
  game: null,
  player: null,
  removePlayer: () => set(() => ({ player: null })),
  setGame: (game) => set(() => ({ game })),
  setPlayer: (player) => set(() => ({ player })),
}));

export const usePlayer = () => {
  return useStore((state) => state.player);
};

export const useGame = () => {
  return useStore((state) => state.game);
};
