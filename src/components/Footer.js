import { Sheet, Typography } from "@mui/joy";

const Footer = () => {
  return (
    <Sheet
      variant="soft"
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        p: 3,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography>
        All images for cars are{" "}
        <a href="http://www.freepik.com">Designed by pch.vector / Freepik</a>
      </Typography>

      <div>
        <Typography level="body3">Published at: 2079/04/28</Typography>
        <Typography level="body3">
          Version: {process.env.REACT_APP_VERSION}
        </Typography>
      </div>
    </Sheet>
  );
};

export default Footer;
