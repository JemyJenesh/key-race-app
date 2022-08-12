import { Button } from "@mui/joy";
import Sheet from "@mui/joy/Sheet";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { InviteLink, PlayersList } from "../components";
import StatBox from "../components/StatBox";
import TypingArea from "../components/TypingArea";
import { gameContext } from "../contexts/gameContext";
import { playerContext } from "../contexts/playerContext";
import { gameService, playerService } from "../services";

export function Game() {
  const { id } = useParams();
  const { player, setPlayer } = useContext(playerContext);
  const { game, setGame } = useContext(gameContext);
  const [joining, setJoining] = useState(false);
  const isHost = player?.id === game?.hostId;
  const joined = !!game?.players.find((p) => p.id === player?.id);

  const start = async () => {
    await gameService.update(game?.id, {
      ...game,
      startedAt: new Date().getTime(),
    });
  };

  const join = async () => {
    setJoining(true);
    const updatedPlayer = {
      ...player,
      wordIndex: 0,
    };
    setPlayer(updatedPlayer);

    await playerService.update(player.id, updatedPlayer);
    await gameService.update(game?.id, {
      ...game,
      players: [...game.players, updatedPlayer],
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

  // if (!player) {
  //   return <Navigate to={`/player?to=${id}`} />;
  // }

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
