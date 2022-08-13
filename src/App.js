import { Box } from "@mui/joy";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./app.css";
import Form from "./components/Form";
import Spinner from "./components/Spinner";
import { Game, Home } from "./pages";
import { playerService } from "./services";
import playerUtil from "./utils/player";
import { useStore } from "./utils/store";

function App() {
  const setPlayer = useStore((state) => state.setPlayer);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const playerId = playerUtil.getPlayerId();

    if (playerId) {
      (async () => {
        try {
          const player = await playerService.get(playerId);
          setPlayer(player);
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
    return (
      <Box display="flex" justifyContent="center" mt={10}>
        <Spinner />
      </Box>
    );
  }

  return (
    <>
      <Form />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<Game />} />
      </Routes>
    </>
  );
}

export default App;
