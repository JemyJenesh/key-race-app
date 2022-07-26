import Typography from "@mui/joy/Typography";
import { useEffect, useState } from "react";
import { theme } from "../config";
import { useGame, usePlayer } from "../utils/store";

const DisplayWords = ({ typedWord }) => {
  const player = usePlayer();
  const game = useGame();
  const [errorIndex, setErrorIndex] = useState(null);

  const words = game.words;
  const currentWord = words[player?.wordIndex ?? 0];

  useEffect(() => {
    currentWord?.split("").some((c, i) => {
      if (typedWord[i] && c !== typedWord[i]) {
        setErrorIndex(i);
      } else {
        setErrorIndex(null);
      }
      return c !== typedWord[i];
    });
  }, [typedWord]);

  const getTypedWords = () => {
    let typedWords = words.slice(0, player?.wordIndex ?? 0);
    typedWords = typedWords.join(" ");

    return <Typography textColor="lightgray">{typedWords} </Typography>;
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

  const getRestWords = () => {
    let restWords = words.slice((player?.wordIndex ?? 0) + 1);
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

export default DisplayWords;
