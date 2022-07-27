import { Route, Routes } from "react-router-dom";

import { Game, Home, Player } from "./pages";

import { useContext, useEffect, useState } from "react";
import "./app.css";
import { playerContext } from "./contexts/playerContext";
import playerService from "./services/player";
import playerUtil from "./utils/player";

function App() {
  const { setPlayer } = useContext(playerContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const playerId = playerUtil.getPlayerId();

    if (playerId) {
      (async () => {
        try {
          const res = await playerService.get(playerId);

          setPlayer(res.data);
        } catch (err) {
          console.log(err);

          playerUtil.removePlayerId();
        } finally {
          setLoading(false);
        }
      })();
    } else {
      console.log("no player");
      setLoading(false);
    }
  }, []);

  if (loading) {
    return "loading...";
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game/:id" element={<Game />} />
      <Route path="/player" element={<Player />} />
    </Routes>
  );
}

export default App;
