import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import { useGame } from "../utils/store";
import Car from "./Car";
import Track from "./Track";

const positionMap = {
  1: "1st ",
  2: "2nd ",
  3: "3rd ",
  4: "4th ",
  5: "5th ",
  6: "6th ",
  7: "7th ",
  8: "8th ",
  9: "9th ",
};

export function Player({ player, number }) {
  const game = useGame();

  return (
    <Sheet
      sx={{
        display: "flex",
        gap: "2px",
      }}
    >
      <Track>
        <Car
          number={number}
          name={player.name}
          progress={Math.floor((player?.wordIndex / game?.words.length) * 100)}
        />
      </Track>
      <Sheet
        sx={{
          width: 80,
          textAlign: "right",
          alignItems: "stretch",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        {player.position > 0 && (
          <Typography fontSize="sm">
            {positionMap[player.position]} Place!
          </Typography>
        )}
        <Typography fontWeight="lg">{player.wpm} WPM</Typography>
      </Sheet>
    </Sheet>
  );
}
