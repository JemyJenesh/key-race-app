import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";

import { GameInfo, PlayersList } from "../components";

export function Game() {
  return (
    <Sheet
      sx={{
        maxWidth: 1500,
        marginX: "auto",
        display: "flex",
        height: "100vh",
      }}
    >
      <PlayersList />
      <Sheet sx={{ flex: 1, p: 4 }}>
        <Typography textAlign="justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typography>
      </Sheet>
      <GameInfo />
    </Sheet>
  );
}
