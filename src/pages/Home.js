import Button from "@mui/joy/Button";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import { NavLink } from "react-router-dom";

export function Home() {
  return (
    <Sheet
      sx={{
        textAlign: "center",
      }}
    >
      <Typography level="h2" component="h2" marginBottom={1}>
        Welcome to Key Racer
      </Typography>
      <Typography level="p" component="p" color="primary" marginBottom={5}>
        A clone of TypeRacer, by Jenesh.
      </Typography>

      <Button variant="soft" component={NavLink} to="/create">
        Play with friends
      </Button>
    </Sheet>
  );
}
