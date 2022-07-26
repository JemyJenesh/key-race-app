import Input from "@mui/joy/Input";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import { useEffect, useRef, useState } from "react";
import { useCountdown } from "../hooks/useCountdown";
import { gameService, playerService } from "../services";
import playerUtil from "../utils/player";
import { useGame, usePlayer, useStore } from "../utils/store";
import DisplayWords from "./DisplayWords";

export default function TypingArea() {
  const inputRef = useRef();
  const player = usePlayer();
  const setPlayer = useStore((state) => state.setPlayer);
  const game = useGame();
  const [counter, start] = useCountdown(5, 1000);
  const [text, setText] = useState("");

  const handleTextChange = async (e) => {
    let value = e.target.value;

    if (value.length > 27) return;

    let lastValue = value.charAt(value.length - 1);

    const isCorrect = value.trim() === game.words[player.wordIndex];
    const isLastWord = player.wordIndex === game.words.length - 1;

    if (isCorrect && (lastValue === " " || isLastWord)) {
      setText("");
      const speed = playerUtil.calculateWPM(
        game.startedAt,
        new Date().getTime(),
        game.words,
        player.wordIndex
      );
      let updatedPlayer = game.players.find((p) => p.id === player.id);
      updatedPlayer.wordIndex += 1;
      updatedPlayer.wpm = speed;

      if (isLastWord) {
        updatedPlayer.position = game.position + 1;
      }

      const players = game.players.map((p) =>
        p.id === player.id ? updatedPlayer : p
      );

      setPlayer(updatedPlayer);

      await gameService.update(game?.id, {
        ...game,
        position: game.position + isLastWord ? 1 : 0,
        players,
      });
      await playerService.update(player.id, updatedPlayer);
    } else {
      setText(value);
    }
  };

  useEffect(() => {
    if (game?.startedAt) {
      start();
    }
  }, [game?.startedAt]);

  useEffect(() => {
    if (counter === 0) {
      const input = inputRef.current.querySelector("input");

      input.focus();
    }
  }, [counter]);

  if (!game) return null;

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
        <DisplayWords typedWord={text} />
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
