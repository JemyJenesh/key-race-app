import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";

export function PlayersList() {
  return (
    <Sheet
      sx={{
        width: 300,
        py: 4,
        pl: 4,
      }}
    >
      <Typography
        id="players-list"
        level="body2"
        textTransform="uppercase"
        fontWeight="lg"
        mb={1}
      >
        Players
      </Typography>
      <List
        aria-labelledby="decorated-list-demo"
        sx={{ "--List-decorator-width": "32px" }}
      >
        <ListItem>
          <ListItemDecorator>🧅</ListItemDecorator> Player 1
        </ListItem>
        <ListItem>
          <ListItemDecorator>🍤</ListItemDecorator> Player 2
        </ListItem>
        <ListItem>
          <ListItemDecorator>🥓</ListItemDecorator> Player 3
        </ListItem>
      </List>
    </Sheet>
  );
}
