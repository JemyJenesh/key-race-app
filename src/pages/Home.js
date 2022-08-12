import { Sheet, Typography } from "@mui/joy";
import Button from "../components/Button";
import { useCreateGame } from "../hooks";
import { useForm, usePlayer } from "../utils/store";

export function Home() {
  const { showForm } = useForm();

  const player = usePlayer();

  const { loading, createGame } = useCreateGame();

  const handleClick = async () => {
    if (!player) {
      showForm();
    } else {
      await createGame(player);
    }
  };

  return (
    <Sheet
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: 5,
      }}
    >
      <Typography level="h3" component="h3" marginBottom={1}>
        Hi, {player ? player.name : "there"}
      </Typography>
      <Typography level="h2" component="h2" marginBottom={1}>
        Welcome to Key Racer
      </Typography>
      <Typography level="p" component="p" color="primary" marginBottom={5}>
        A clone of TypeRacer, by Jenesh.
      </Typography>

      <img src="/images/banner.png" style={{ display: "block" }} />
      <Typography marginBottom={3}>
        Image by{" "}
        <a href="https://pixabay.com/users/pixloger-783453/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1648337">
          PixLoger
        </a>{" "}
        from{" "}
        <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1648337">
          Pixabay
        </a>
      </Typography>

      <Button onClick={handleClick} size="lg" variant="soft" loading={loading}>
        Start a race!
      </Button>
    </Sheet>
  );
}
