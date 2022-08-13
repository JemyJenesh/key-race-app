import { useState } from "react";
import { gameService, playerService } from "../services";
import { useStore } from "../utils/store";

export const useJoinPlayer = () => {
  const [joining, setJoining] = useState(false);
  const [error, setError] = useState(null);

  const join = async (player) => {
    const game = useStore.getState().game;
    const updatedPlayer = {
      ...player,
      wordIndex: 0,
      wpm: 0,
      position: 0,
    };

    if (game.isOver) {
      setError("The game is over!");
    } else if (game.startedAt) {
      setError("The game has already began!");
    } else if (game.players.length >= 5) {
      setError("The game is full!");
    } else {
      try {
        setJoining(true);

        useStore.setState({ player: updatedPlayer });

        await playerService.update(player.id, updatedPlayer);
        await gameService.update(game.id, {
          ...game,
          players: [...game.players, updatedPlayer],
        });

        console.log("Player from useJoinPlayer");
      } catch (error) {
        setError(error);
      } finally {
        setJoining(false);
        setError(null);
      }

      return player;
    }
  };

  return { joining, error, join };
};
