import Slider from "@mui/joy/Slider";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";

export function Player({ player }) {
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
        color={player.color ?? "neutral"}
        fontWeight={player.color ? "lg" : "sm"}
      >
        {player.name}
      </Typography>

      <Slider
        defaultValue={80}
        color={player.color ?? "neutral"}
        size={player.color ? "md" : "sm"}
      />
      <Typography
        sx={{
          flexShrink: 0,
          width: 100,
          maxWidth: 100,
        }}
        color={player.color ?? "neutral"}
        fontWeight={player.color ? "lg" : "sm"}
      >
        100 wpm
      </Typography>
    </Sheet>
  );
}
