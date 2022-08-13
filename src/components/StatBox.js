import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";

export default function StatBox() {
  return (
    <Sheet
      variant="outlined"
      sx={{
        p: 2,
        width: "100%",
        textAlign: "left",
        borderCollapse: "collapse",
        "& thead": {
          background: (theme) =>
            theme.colorSchemes.light.palette.background.level3,
        },
        "& > thead tr th": {
          px: 2,
          height: 32,
          width: "20%",
        },
        "& > tbody tr td": {
          px: 2,
          height: 32,
          width: "20%",
        },
        // "& tbody": {
        //   background: (theme) => theme.colorSchemes.light.palette.primary[100],
        // },
      }}
      component="table"
    >
      <thead>
        <tr>
          <th>
            <Typography fontWeight="lg">Position</Typography>
          </th>
          <th>
            <Typography fontWeight="lg">Player</Typography>
          </th>
          <th>
            <Typography fontWeight="lg">Speed</Typography>
          </th>
          <th>
            <Typography fontWeight="lg">Accuracy</Typography>
          </th>
          <th>
            <Typography fontWeight="lg">Time</Typography>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Typography>1</Typography>
          </td>
          <td>
            <Typography>Jenesh</Typography>
          </td>
          <td>
            <Typography>78 wpm</Typography>
          </td>
          <td>
            <Typography>98%</Typography>
          </td>
          <td>
            <Typography>0:37</Typography>
          </td>
        </tr>
        <tr>
          <td>
            <Typography>1</Typography>
          </td>
          <td>
            <Typography>Jenesh</Typography>
          </td>
          <td>
            <Typography>78 wpm</Typography>
          </td>
          <td>
            <Typography>98%</Typography>
          </td>
          <td>
            <Typography>0:37</Typography>
          </td>
        </tr>
        <tr>
          <td>
            <Typography>1</Typography>
          </td>
          <td>
            <Typography>Jenesh</Typography>
          </td>
          <td>
            <Typography>78 wpm</Typography>
          </td>
          <td>
            <Typography>98%</Typography>
          </td>
          <td>
            <Typography>0:37</Typography>
          </td>
        </tr>
        <tr>
          <td>
            <Typography>1</Typography>
          </td>
          <td>
            <Typography>Jenesh</Typography>
          </td>
          <td>
            <Typography>78 wpm</Typography>
          </td>
          <td>
            <Typography>98%</Typography>
          </td>
          <td>
            <Typography>0:37</Typography>
          </td>
        </tr>
      </tbody>
    </Sheet>
  );
}
