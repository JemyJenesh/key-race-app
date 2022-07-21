import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import { NavLink } from "react-router-dom";

export function User() {
  return (
    <Sheet
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 5,
      }}
    >
      <Typography level="h2" component="h2" marginBottom={5}>
        Create your profile
      </Typography>

      <form style={{ width: 300 }}>
        <Typography level="body" component="label" marginBottom={1}>
          Enter your name
        </Typography>
        <Input sx={{ marginBottom: 5 }} autoFocus />

        <Button fullWidth variant="soft" component={NavLink} to="/game">
          Set name
        </Button>
      </form>
    </Sheet>
  );
}
