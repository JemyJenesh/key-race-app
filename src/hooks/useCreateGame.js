import { useState } from "react";
import { useNavigate } from "react-router-dom";
import gameService from "../services/game";
import { useStore } from "../utils/store";

export const useCreateGame = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createGame = async (player) => {
    try {
      setLoading(true);

      const game = await gameService.create(player);

      useStore.setState({ game });

      navigate(`/game/${game.id}`);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, createGame };
};
