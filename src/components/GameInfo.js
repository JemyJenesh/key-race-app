import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";

export function GameInfo() {
  return (
    <Sheet sx={{ width: 300, py: 4, pr: 4 }}>
      <Typography textAlign="center" fontWeight="lg" mb={1}>
        Share link
      </Typography>
      <Input
        fullWidth
        size="sm"
        readOnly
        value="http://localhost:3000/game/1023henfoa0913he12j102f9sd0f9h1"
        endDecorator={
          <Button variant="soft" size="sm">
            Copy
          </Button>
        }
        sx={{
          "--Input-radius": `16px`,
          "--Input-decorator-childHeight": `32px`,
        }}
      />
    </Sheet>
  );
}
