import { Box, Input, Sheet, Typography } from "@mui/joy";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../components/Button";
import { useCreateGame, useCreatePlayer, useJoinPlayer } from "../hooks";
import { useForm } from "../utils/store";

const Form = () => {
  let location = useLocation();
  const [name, setName] = useState("");
  const { open, hideForm } = useForm();

  const { loading: creating, createGame } = useCreateGame();
  const { loading, createPlayer } = useCreatePlayer();
  const { joining, join } = useJoinPlayer();

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const player = await createPlayer(name);

    if (location.pathname === "/") {
      await createGame(player);
    } else {
      await join(player);
    }
    setName("");
    hideForm();
  };

  if (!open) return null;

  return (
    <Sheet
      sx={{
        backdropFilter: "blur(4px)",
        background: "rgba(0,0,0,0.5)",
        height: "100%",
        position: "fixed",
        inset: 0,
        width: "100%",
        zIndex: 100,
      }}
    >
      <Sheet
        sx={{
          width: "400px",
          margin: "auto",
          p: 5,
          mt: 10,
          borderRadius: 8,
        }}
      >
        <Typography
          level="h3"
          component="h3"
          marginBottom={4}
          textAlign="center"
        >
          Create your profile
        </Typography>

        <form onSubmit={handleSubmit}>
          <Typography level="body" component="label" marginBottom={1}>
            Enter your name
          </Typography>

          <Input
            sx={{ marginBottom: 5 }}
            autoFocus
            value={name}
            onChange={handleChange}
            required
          />

          <Box display="flex" gap={2}>
            <Button variant="soft" fullWidth type="submit" onClick={hideForm}>
              Cancel
            </Button>
            <Button
              fullWidth
              type="submit"
              loading={loading || creating || joining}
            >
              Create
            </Button>
          </Box>
        </form>
      </Sheet>
    </Sheet>
  );
};

export default Form;
