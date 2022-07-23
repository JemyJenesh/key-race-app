import ListDivider from "@mui/joy/ListDivider";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import { useContext } from "react";
import { gameContext } from "../contexts/gameContext";

import { Player } from "./Player";

export function PlayersList() {
  const { game } = useContext(gameContext);

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
      {game?.players.map((player) => (
        <Player key={player._id} player={player} />
      ))}
    </Sheet>
  );
}
