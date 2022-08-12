import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import { useGame } from "../utils/store";
import Car from "./Car";
import Track from "./Track";

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
        <Typography fontSize="sm">nth Place!</Typography>
        <Typography fontWeight="lg">{player.speed} WPM</Typography>
      </Sheet>
    </Sheet>
  );
}
