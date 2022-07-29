import Typography from "@mui/joy/Typography";
import { useContext, useEffect, useState } from "react";
import { theme } from "../config";
import { gameContext } from "../contexts/gameContext";
import { playerContext } from "../contexts/playerContext";

const DisplayWords = ({ typedWord }) => {
  const { player } = useContext(playerContext);
  const { game } = useContext(gameContext);
  const [errorIndex, setErrorIndex] = useState(null);

  const words = game.words;
  const currentWord = words[player.wordIndex];

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
    let typedWords = words.slice(0, player.wordIndex);
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

export default DisplayWords;
