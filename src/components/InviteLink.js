import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";

export function InviteLink({ gameId }) {
  const link = `http://localhost:3000/game/${gameId}`;

  return (
    <Sheet>
      <Typography textAlign="center" fontWeight="lg" mb={1}>
        Invite friends
      </Typography>
      <Input
        fullWidth
        size="sm"
        readOnly
        value={link}
        endDecorator={
          <Button
            variant="soft"
            size="sm"
            onClick={() => {
              navigator.clipboard.writeText(link);
            }}
          >
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
