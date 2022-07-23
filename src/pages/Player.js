import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import playerService from "../services/player";
import playerUtil from "../utils/player";

export function Player() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await playerService.create(name);

      playerUtil.savePlayerId(data._id);

      navigate("/game");
    } catch (error) {
      console.log(error);
    }
  };

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
