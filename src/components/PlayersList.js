import ListDivider from "@mui/joy/ListDivider";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";

import { Player } from "./Player";

export function PlayersList() {
  return (
    <Sheet>
      <Typography id="players-list" mb={1} fontSize="lg">
        Waiting for players...
      </Typography>
      <ListDivider />
      <Player player={{ name: "Player 2" }} />
      <Player player={{ name: "Jenesh Pradhananga", color: "primary" }} />
      <Player player={{ name: "Player 3" }} />
    </Sheet>
  );
}
