import Input from "@mui/joy/Input";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import { useContext } from "react";
import { gameContext } from "../contexts/gameContext";

export default function TypingArea() {
  const { game } = useContext(gameContext);

  return (
    <Sheet variant="outlined" sx={{ p: 2, borderRadius: 8 }}>
      <Typography textAlign="justify" marginBottom={3} fontSize="xl">
        {game?.words.join(" ")}
      </Typography>

      <Input
        placeholder="Type the above text here"
        readOnly={!game?.hasStarted}
      />
    </Sheet>
  );
}
