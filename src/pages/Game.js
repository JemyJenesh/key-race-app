import Sheet from "@mui/joy/Sheet";
import { useContext } from "react";
import { Navigate, useParams } from "react-router-dom";

import { InviteLink, PlayersList } from "../components";
import StatBox from "../components/StatBox";
import TypingArea from "../components/TypingArea";
import { playerContext } from "../contexts/playerContext";

export function Game() {
  const { id } = useParams();
  const { player } = useContext(playerContext);

  if (!player) {
    return <Navigate to={`/player?to=${id}`} />;
  }

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
      <InviteLink gameId={id} />
      <StatBox />
    </Sheet>
  );
}
