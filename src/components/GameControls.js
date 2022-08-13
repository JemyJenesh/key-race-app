import { Box } from "@mui/joy";
import { useState } from "react";
import Button from "../components/Button";
import { useJoinPlayer } from "../hooks";
import { gameService } from "../services";
import { useForm, useGame, usePlayer } from "../utils/store";

const GameControls = () => {
  const { showForm } = useForm();
  const game = useGame();
  const player = usePlayer();
  const [starting, setStarting] = useState(false);
  const { joining, error, join: joinPlayer } = useJoinPlayer();

  const isHost = player?.id === game?.hostId;
  const joined = !!game?.players.find((p) => p.id === player?.id);

  const start = async () => {
    setStarting(true);
    await gameService.update(game.id, {
      ...game,
      startedAt: new Date().getTime(),
    });
    setStarting(false);
  };

  const join = async () => {
    if (!player) {
      showForm();
    } else {
      joinPlayer(player);
    }
  };

  if (!game) return null;

  return (
    <Box display="flex" justifyContent="flex-end">
      {error}

      {isHost ? (
        <Button onClick={start} disabled={!!game.startedAt} loading={starting}>
          Start
        </Button>
      ) : (
        <Button onClick={join} disabled={joined} loading={joining}>
          Join
        </Button>
      )}
    </Box>
  );
};

export default GameControls;
