import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";

export function InviteLink() {
  return (
    <Sheet>
      <Typography textAlign="center" fontWeight="lg" mb={1}>
        Invite friends
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
          "--Input-decorator-childHeight": `32px`,
        }}
      />
    </Sheet>
  );
}
