import { useState } from "react";

import playerService from "../services/player";
import { useStore } from "../utils/store";

const useCreatePlayer = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createPlayer = async (name) => {
    let player = null;

    try {
      setLoading(true);

      player = await playerService.create(name);
      console.log("Player from useCreatePlayer", player);

      useStore.setState({ player });
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }

    return player;
  };

  return { loading, error, createPlayer };
};

export default useCreatePlayer;
