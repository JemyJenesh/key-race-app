import Input from "@mui/joy/Input";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import { useContext, useEffect, useRef, useState } from "react";
import { socket, theme } from "../config";
import { gameContext } from "../contexts/gameContext";
import { playerContext } from "../contexts/playerContext";
import { useCountdown } from "../hooks/useCountdown";

const DisplayWords = ({ words, player }) => {
  const getTypedWords = () => {
    let typedWords = words.slice(0, player.wordIndex);
    typedWords = typedWords.join(" ");

    return <Typography textColor="lightgray">{typedWords} </Typography>;
  };

  const getCurrentWords = () => {
    return (
      <Typography
        bgcolor={theme.colorSchemes.light.palette.primary.softActiveBg}
      >
        {words[player.wordIndex]}
      </Typography>
    );
  };

  const getRestWords = () => {
    let restWords = words.slice(player.wordIndex + 1);
    restWords = restWords.join(" ");

    return <Typography> {restWords}</Typography>;
  };

  return (
    <>
      {getTypedWords()}
      {getCurrentWords()}
      {getRestWords()}
    </>
  );
};

export default function TypingArea() {
  const inputRef = useRef();
  const { player } = useContext(playerContext);
  const { game } = useContext(gameContext);
  const [counter, start] = useCountdown(5, 1000);
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    let value = e.target.value;
    let lastValue = value.charAt(value.length - 1);

    const isCorrect = value.trim() === game.words[player.wordIndex];

    if (
      isCorrect &&
      (lastValue === " " || player.wordIndex === game.words.length - 1)
    ) {
      socket.emit("playerTyped", {
        gameId: game?._id,
        playerId: player?._id,
        word: value.trim(),
      });
      setText("");
    } else {
      setText(value);
    }
  };

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
        <DisplayWords words={game.words} player={player} />
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
        readOnly={counter > 0 || player?.wordIndex === game.words.length}
        value={text}
        onChange={handleTextChange}
      />
    </Sheet>
  );
}
