import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";

import Track from "./Track";
import Car from "./Car";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "@mui/joy";
import { useCountdown } from "../hooks/useCountdown";

const calculateSpeed = (startTime, endTime, characterCount) => {
  const time = endTime - startTime;
  const timeInMin = time / 60000;

  return Math.floor(characterCount / 5 / timeInMin);
};

const Typing = () => {
  const words = [
    "I",
    "have",
    "moments",
    "like",
    "that",
    "a",
    "lot,",
    "when",
    "my",
    "brain",
    "falls",
    "asleep",
    "or",
    "something,",
    "and",
    "the",
    "next",
    "thing",
    "I",
    "know",
    "I've",
    "missed",
    "something,",
    "as",
    "if",
    "a",
    "puzzle",
    "piece",
    "fell",
    "out",
    "of",
    "the",
    "universe",
    "and",
    "left",
    "me",
    "staring",
    "at",
    "the",
    "blank",
    "place",
    "behind",
    "it.",
  ];
  const text = words.join(" ");
  const inputRef = useRef();
  const [counter, start] = useCountdown(5, 1000);

  const theme = useTheme();
  const [wordIndex, setWordIndex] = useState(0);
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState(0);
  const isOver = wordIndex >= words.length;
  const progress = Math.floor((wordIndex / words.length) * 100);
  const [speed, setSpeed] = useState(0);

  const [errorIndex, setErrorIndex] = useState(null);

  const currentWord = words[wordIndex];

  useEffect(() => {
    currentWord?.split("").some((c, i) => {
      if (input[i] && c !== input[i]) {
        setErrorIndex(i);
      } else {
        setErrorIndex(null);
      }
      return c !== input[i];
    });
  }, [input]);

  const handleChange = (e) => {
    const value = e.target.value;
    const lastChar = value.charAt(value.length - 1);

    if (
      (lastChar === " " || wordIndex === words.length - 1) &&
      value.trim() === words[wordIndex]
    ) {
      setSpeed(
        calculateSpeed(
          startTime,
          new Date().getTime(),
          words.slice(0, wordIndex).join(" ").length
        )
      );
      setWordIndex((prev) => prev + 1);
      setInput("");
    } else {
      setInput(value);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key !== "Backspace") {
      console.log(e.key);
    } else {
      console.log("Backspace press");
    }
    console.log(input, e.key);
  };

  const getCurrentWords = () => {
    return currentWord?.split("").map((c, i) => (
      <Typography
        key={i}
        bgcolor={
          errorIndex !== null && i >= errorIndex
            ? theme.colorSchemes.light.palette.danger.softActiveBg
            : theme.colorSchemes.light.palette.primary.softActiveBg
        }
      >
        {c}
      </Typography>
    ));
  };

  useEffect(() => {
    start();
  }, []);

  useEffect(() => {
    if (counter === 0) {
      setStartTime(new Date().getTime());
      inputRef.current?.focus();
    }
  }, [counter]);

  return (
    <Sheet
      sx={{
        maxWidth: 1000,
        minWidth: 800,
        marginX: "auto",
        minHeight: "100vh",
        p: 3,
      }}
    >
      <Track>
        <Car name="Pradhanang" progress={progress} />
      </Track>
      <Sheet
        color="neutral"
        variant="soft"
        sx={{ mt: 3, p: 3, borderRadius: 8 }}
      >
        <Typography>{counter}</Typography>
        <Typography>{speed}</Typography>
        <Typography fontSize="lg" marginBottom={3}>
          <Typography textColor="gray">
            {words.slice(0, wordIndex).join(" ")}
          </Typography>{" "}
          {getCurrentWords()}{" "}
          <Typography>{words.slice(wordIndex + 1).join(" ")}</Typography>
        </Typography>
        <Input
          ref={inputRef}
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          readOnly={isOver || counter > 0}
        />
      </Sheet>
    </Sheet>
  );
};

export default Typing;
