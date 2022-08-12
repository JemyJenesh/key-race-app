import ListDivider from "@mui/joy/ListDivider";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import { useGame } from "../utils/store";
import { Player } from "./Player";

export function PlayersList() {
  const game = useGame();

  const title = !game?.hasStarted
    ? "Waiting for players..."
    : game?.isOver
    ? "The race is over."
    : "Players are racing...";

  return (
    <Sheet>
      <Typography id="players-list" mb={1} fontSize="lg">
        {title}
      </Typography>
      <ListDivider />
      {game?.players?.map((player, i) => (
        <Player key={player.id} player={player} number={i} />
      ))}
    </Sheet>
  );
}
