import { Route, Routes } from "react-router-dom";

import { Game, Home, Player } from "./pages";

import "./app.css";
import { playerContext } from "./contexts/playerContext";
import { Suspense, useContext, useEffect, useState } from "react";
import playerUtil from "./utils/player";
import playerService from "./services/player";

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
        }
      })();
    } else {
      console.log("no player");
    }

    setLoading(false);
  }, []);

  if (loading) {
    return "loading...";
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<Game />} />
      <Route path="/player" element={<Player />} />
    </Routes>
  );
}

export default App;
