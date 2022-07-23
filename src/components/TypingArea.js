import Input from "@mui/joy/Input";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import { useContext, useEffect, useRef } from "react";
import { gameContext } from "../contexts/gameContext";
import { useCountdown } from "../hooks/useCountdown";

export default function TypingArea() {
  const inputRef = useRef();
  const { game } = useContext(gameContext);
  const [counter, start] = useCountdown(5, 1000);

  useEffect(() => {
    if (game?.hasStarted) {
      start();
    }
  }, [game?.hasStarted]);

  useEffect(() => {
    if (counter === 0) {
      const input = inputRef.current.querySelector("input");

      input.focus();
    }
  }, [counter]);

  return (
    <Sheet
      variant="outlined"
      sx={{ p: 2, borderRadius: 8, position: "relative" }}
    >
      <Typography
        textAlign="justify"
        marginBottom={3}
        fontSize="xl"
        sx={{ opacity: counter === 0 ? "100%" : "50%" }}
      >
        {game?.words.join(" ")}
      </Typography>

      <Typography
        textAlign="center"
        fontSize={64}
        sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          opacity: counter === 0 ? "0%" : "100%",
        }}
      >
        {counter}
      </Typography>

      <Input
        ref={inputRef}
        placeholder="Type the above text here"
        readOnly={counter > 0}
      />
    </Sheet>
  );
}
