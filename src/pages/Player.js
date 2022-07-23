import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import { useContext, useState } from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { playerContext } from "../contexts/playerContext";
import { gameService, playerService } from "../services";
import playerUtil from "../utils/player";

export function Player() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const queryParam = searchParams.get("to");

  const { setPlayer } = useContext(playerContext);

  const [name, setName] = useState("");
  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name) return;

    try {
      const { data: player } = await playerService.create(name);

      playerUtil.savePlayerId(player._id);
      setPlayer(player);

      if (!queryParam) {
        navigate("/");
      } else if (queryParam === "create") {
        const { data: game } = await gameService.create(player._id);
        navigate(`/game/${game._id}`);
      } else {
        navigate(`/game/${queryParam}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!queryParam) {
    return <Navigate to="/" />;
  }

  return (
    <Sheet
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 5,
      }}
    >
      <Typography level="h2" component="h2" marginBottom={5}>
        Create your profile
      </Typography>

      <form style={{ width: 300 }} onSubmit={handleSubmit}>
        <Typography level="body" component="label" marginBottom={1}>
          Enter your name
        </Typography>
        <Input
          sx={{ marginBottom: 5 }}
          autoFocus
          value={name}
          onChange={handleInputChange}
        />

        <Button fullWidth variant="soft" type="submit">
          Set name
        </Button>
      </form>
    </Sheet>
  );
}
