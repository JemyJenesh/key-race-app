import Button from "@mui/joy/Button";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gameContext } from "../contexts/gameContext";
import { playerContext } from "../contexts/playerContext";
import { gameService } from "../services";

export function Home() {
  const [loading, setLoading] = useState(false);
  const { setGame } = useContext(gameContext);
  const { player } = useContext(playerContext);
  const navigate = useNavigate();

  const handleClick = async () => {
    if (player) {
      setLoading(true);
      await handleCreateGame();
      setLoading(false);
    } else {
      handleCreatePlayer();
    }
  };

  const handleCreateGame = async () => {
    const game = await gameService.create(player);

    setGame(game);

    navigate(`/game/${game.id}`);
  };

  const handleCreatePlayer = () => {
    navigate(`/player?to=create`);
  };

  return (
    <Sheet
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
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

      <img src="/images/banner.png" style={{ display: "block" }} />
      <Typography marginBottom={3}>
        Image by{" "}
        <a href="https://pixabay.com/users/pixloger-783453/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1648337">
          PixLoger
        </a>{" "}
        from{" "}
        <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1648337">
          Pixabay
        </a>
      </Typography>

      <Button onClick={handleClick} size="lg" variant="soft" disabled={loading}>
        Start a race!
      </Button>
    </Sheet>
  );
}
