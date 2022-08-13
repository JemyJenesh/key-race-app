import { useForm, useGame, usePlayer } from "../utils/store";
import Button from "../components/Button";
import { gameService } from "../services";
import { useJoinPlayer } from "../hooks";
import { Box } from "@mui/joy";

const GameControls = () => {
  const { showForm } = useForm();
  const game = useGame();
  const player = usePlayer();
  const { joining, error, join: joinPlayer } = useJoinPlayer();

  const isHost = player?.id === game?.hostId;
  const joined = !!game?.players.find((p) => p.id === player?.id);

  const start = async () => {
    await gameService.update(game.id, {
      ...game,
      startedAt: new Date().getTime(),
    });
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
    <Box display="flex" justifyContent="space-around">
      {error}
      <Button variant="soft" disabled>
        Leave
      </Button>
      {isHost ? (
        <Button onClick={start} disabled={!!game.startedAt}>
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
