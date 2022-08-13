import { useState } from "react";
import { playerService } from "../services";
import playerUtil from "../utils/player";
import { useStore } from "../utils/store";

export const useCreatePlayer = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createPlayer = async (name) => {
    let player = null;

    try {
      setLoading(true);

      player = await playerService.create(name);
      console.log("Player from useCreatePlayer", player);

      playerUtil.savePlayerId(player.id);

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
