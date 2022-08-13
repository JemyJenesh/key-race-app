import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import { useGame } from "../utils/store";

export function InviteLink({ gameId }) {
  const game = useGame();
  const link = `${process.env.REACT_APP_URL}/game/${gameId}`;

  if (!game) return null;

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
