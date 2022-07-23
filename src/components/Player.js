import Slider from "@mui/joy/Slider";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import { useContext } from "react";
import { playerContext } from "../contexts/playerContext";

export function Player({ player }) {
  const { player: currentPlayer } = useContext(playerContext);
  const { name } = player;

  const isYou = player._id === currentPlayer._id;
  const color = isYou ? "primary" : "neutral";

  return (
    <Sheet sx={{ display: "flex", alignItems: "center", gap: 2, pt: 1 }}>
      <Typography
        sx={{
          flexShrink: 0,
          width: 150,
          maxWidth: 150,
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
        }}
        color={color}
        fontWeight={isYou ? "lg" : "sm"}
      >
        {name}
      </Typography>

      <Slider
        defaultValue={0}
        color={color}
        size={isYou ? "md" : "sm"}
        value={player.speed}
      />
      <Typography
        sx={{
          flexShrink: 0,
          width: 100,
          maxWidth: 100,
        }}
        color={color}
        fontWeight={isYou ? "lg" : "sm"}
      >
        {player.speed} wpm
      </Typography>
    </Sheet>
  );
}
