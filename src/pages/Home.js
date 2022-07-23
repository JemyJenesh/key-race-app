import Button from "@mui/joy/Button";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { socket } from "../config";
import { playerContext } from "../contexts/playerContext";
import { gameService } from "../services";

export function Home() {
  const { player } = useContext(playerContext);
  const navigate = useNavigate();

  const handleClick = async () => {
    if (player) {
      await handleCreateGame();
    } else {
      handleCreatePlayer();
    }
  };

  const handleCreateGame = async () => {
    const { data } = await gameService.create(player._id);

    socket.emit("gameCreated", data);

    navigate(`/game/${data._id}`);
  };

  const handleCreatePlayer = () => {
    navigate(`/player?to=create`);
  };

  return (
    <Sheet
      sx={{
        textAlign: "center",
        p: 5,
      }}
    >
      <Typography level="h3" component="h3" marginBottom={1}>
        Hi, {player ? player.name : "there"}
      </Typography>
      <Typography level="h2" component="h2" marginBottom={1}>
        Welcome to Key Racer
      </Typography>
      <Typography level="p" component="p" color="primary" marginBottom={5}>
        A clone of TypeRacer, by Jenesh.
      </Typography>

      <Button onClick={handleClick} size="lg" variant="soft">
        Start a race!
      </Button>
    </Sheet>
  );
}
