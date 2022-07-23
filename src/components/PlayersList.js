import ListDivider from "@mui/joy/ListDivider";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";

import { Player } from "./Player";

export function PlayersList({ players, title }) {
  return (
    <Sheet>
      <Typography id="players-list" mb={1} fontSize="lg">
        {title}
      </Typography>
      <ListDivider />
      {players?.map((player) => (
        <Player key={player._id} player={player} />
      ))}
    </Sheet>
  );
}
