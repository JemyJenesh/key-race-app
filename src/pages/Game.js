import Sheet from "@mui/joy/Sheet";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { InviteLink, PlayersList } from "../components";
import GameControls from "../components/GameControls";
import TypingArea from "../components/TypingArea";
import { gameService } from "../services";

export function Game() {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        await gameService.get(id);
      } catch (error) {
        console.log(error);
        navigate("/");
      }
    })();
  }, [id]);

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
      <GameControls />
      <InviteLink gameId={id} />
    </Sheet>
  );
}
