import Sheet from "@mui/joy/Sheet";

const Track = ({ children }) => {
  return (
    <>
      <Sheet
        sx={{
          flex: 1,
          borderBottom: 3,
          borderColor: "gray",
          borderBottomStyle: "dashed",
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
    </>
  );
};

export default Track;
