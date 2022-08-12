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
    };

    try {
      setJoining(true);

      await playerService.update(player.id, updatedPlayer);
      await gameService.update(game.id, {
        ...game,
        players: [...game.players, updatedPlayer],
      });

      console.log("Player from useJoinPlayer");

      useStore.setState({ player, game });
    } catch (error) {
      setError(error);
    } finally {
      setJoining(false);
    }

    return player;
  };

  return { joining, error, join };
};

//       const updatedPlayer = {
//         ...player,
//         wordIndex: 0,
//       };
//       setPlayer(updatedPlayer);

//       await playerService.update(player.id, updatedPlayer);
//       await gameService.update(game?.id, {
//         ...game,
//         players: [...game.players, updatedPlayer],
//       });
