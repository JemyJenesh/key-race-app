import { Button } from "@mui/joy";
import Sheet from "@mui/joy/Sheet";
import { useContext, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";

import { InviteLink, PlayersList } from "../components";
import StatBox from "../components/StatBox";
import TypingArea from "../components/TypingArea";
import { socket } from "../config";
import { gameContext } from "../contexts/gameContext";
import { playerContext } from "../contexts/playerContext";
import { gameService } from "../services";

export function Game() {
  const { id } = useParams();
  const { player } = useContext(playerContext);
  const { game, setGame } = useContext(gameContext);
  const isHost = player?._id === game?.createdBy;

  useEffect(() => {
    socket.on("gameUpdated", (game) => {
      setGame(game);
    });
  }, []);

  useEffect(() => {
    if (player) {
      (async () => {
        const { data } = await gameService.get(id);
        setGame(data);
      })();
    }
  }, [player]);

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
      {game?.isOver ? <StatBox /> : <TypingArea />}
      {isHost && <Button>Start</Button>}
      <InviteLink gameId={id} />
    </Sheet>
  );
}
