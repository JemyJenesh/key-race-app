import create from "zustand";

export const useStore = create((set) => ({
  form: false,
  game: null,
  hideForm: () =>
    set(() => ({
      form: false,
    })),
  player: null,
  removePlayer: () =>
    set(() => ({
      player: null,
    })),
  setGame: (game) =>
    set(() => ({
      game,
    })),
  setPlayer: (player) =>
    set(() => ({
      player,
    })),
  showForm: () =>
    set(() => ({
      form: true,
    })),
}));

export const useForm = () => {
  const hideForm = useStore((state) => state.hideForm);
  const open = useStore((state) => state.form);
  const showForm = useStore((state) => state.showForm);

  return {
    hideForm,
    open,
    showForm,
  };
};

export const usePlayer = () => {
  return useStore((state) => state.player);
};

export const useGame = () => {
  return useStore((state) => state.game);
};
