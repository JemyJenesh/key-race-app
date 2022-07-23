import Slider from "@mui/joy/Slider";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import { useContext } from "react";
import { playerContext } from "../contexts/playerContext";
import { gameContext } from "../contexts/gameContext";

export function Player({ player }) {
  const { game } = useContext(gameContext);
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
        size={isYou ? "lg" : "sm"}
        value={Math.floor((player?.wordIndex / game?.words.length) * 100)}
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
