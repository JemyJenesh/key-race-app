import { useForm, useGame, usePlayer } from "../utils/store";
import Button from "../components/Button";
import { gameService } from "../services";
import { useJoinPlayer } from "../hooks";

const GameControls = () => {
  const { showForm } = useForm();
  const game = useGame();
  const player = usePlayer();
  const { joining, join: joinPlayer } = useJoinPlayer();

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
    <div>
      {isHost ? (
        <Button onClick={start} disabled={!!game.startedAt}>
          Start
        </Button>
      ) : (
        <Button
          onClick={join}
          variant="soft"
          disabled={joined}
          loading={joining}
        >
          Join
        </Button>
      )}
    </div>
  );
};

export default GameControls;
