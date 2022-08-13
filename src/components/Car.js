import Avatar from "@mui/joy/Avatar";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";

const Car = ({ progress = 0, name, number = 0, isSpecial = false }) => {
  return (
    <Sheet
      sx={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        width: "100px",
        gap: "4px",
        left: `${progress}%`,
        mt: 2,
        zIndex: 10,
      }}
    >
      {isSpecial ? (
        <Typography
          bgcolor="gold"
          sx={{
            transform: "skew(10deg)",
          }}
        >
          <Typography
            sx={{
              display: "block",
              textDecoration: "none",
              padding: "2px 6px",
              transform: "skew(-10deg)",
              color: "inherit",
            }}
          >
            {name}
          </Typography>
        </Typography>
      ) : (
        <Typography>{name}</Typography>
      )}

      <Avatar
        variant="plain"
        src={`/images/${number}.jpg`}
        size="lg"
        sx={{
          borderRadius: 0,
          objectFit: "cover",
          height: "2rem",
          width: "auto",
          transform: "scaleX(-1)",
        }}
      />
    </Sheet>
  );
};

export default Car;
