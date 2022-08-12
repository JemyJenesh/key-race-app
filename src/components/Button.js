import MuiButton from "@mui/joy/Button";
import Spinner from "./Spinner";

const Button = ({ children, loading, ...props }) => {
  return (
    <MuiButton
      {...props}
      disabled={loading || props.disabled}
      startIcon={loading && <Spinner />}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
