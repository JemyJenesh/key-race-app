import { Button } from "@mui/joy";
import Sheet from "@mui/joy/Sheet";
import { useContext, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

import { InviteLink, PlayersList } from "../components";
import StatBox from "../components/StatBox";
import TypingArea from "../components/TypingArea";
import { gameContext } from "../contexts/gameContext";
import { playerContext } from "../contexts/playerContext";
import { gameService } from "../services";

export function Game() {
  const { id } = useParams();
  const { player } = useContext(playerContext);
  const { game, setGame } = useContext(gameContext);
  const [joining, setJoining] = useState(false);
  const isHost = player?.id === game?.hostId;
  const joined = !!game?.players.find((p) => p.id === player?.id);

  const start = () => {
    // socket.emit("gameStarted", game?._id);
  };

  const join = async () => {
    setJoining(true);
    await gameService.update(game?.id, {
      ...game,
      players: [...game.players, player],
    });
    setJoining(false);
  };

  useEffect(() => {
    (async () => {
      await gameService.get(id, setGame);
    })();
  }, []);

  // if (!id) {
  //   return <Navigate to="/" />;
  // }

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
      {game && (game.isOver ? <StatBox /> : <TypingArea />)}
      {isHost && !game?.hasStarted && <Button onClick={start}>Start</Button>}
      {!isHost && (
        <Button onClick={join} variant="soft" disabled={joining || joined}>
          Join
        </Button>
      )}
      <InviteLink gameId={id} />
    </Sheet>
  );
}
