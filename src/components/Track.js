import Sheet from "@mui/joy/Sheet";

const Track = ({ children }) => {
  return (
    <Sheet sx={{ display: "flex", gap: "4px", width: "100%" }}>
      <Sheet
        sx={{
          flex: 1,
          borderBottom: 3,
          borderColor: "gray",
          borderBottomStyle: "dashed",
          pb: 0.5,
        }}
      >
        {children}
      </Sheet>
      <Sheet
        sx={{
          width: "100px",
          borderBottom: 3,
          borderColor: "gray",
          borderBottomStyle: "dashed",
          mr: 2,
        }}
      />
    </Sheet>
  );
};

export default Track;
