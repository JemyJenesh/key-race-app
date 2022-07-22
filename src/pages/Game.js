import Sheet from "@mui/joy/Sheet";

import { InviteLink, PlayersList } from "../components";
import TypingArea from "../components/TypingArea";

export function Game() {
  return (
    <Sheet
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        maxWidth: 1000,
        marginX: "auto",
        minHeight: "100vh",
        p: 4,
      }}
    >
      <PlayersList />
      <TypingArea />
      <InviteLink />
    </Sheet>
  );
}
