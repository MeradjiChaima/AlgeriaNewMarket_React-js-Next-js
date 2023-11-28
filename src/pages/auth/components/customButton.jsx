import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const CustomButton = styled(Button)({
  fontFamily: "Open Sans",
  fontWeight: "bold",
  color: "white",
  borderRadius: 6,
  backgroundColor: "rgba(248, 75, 14, 0.64)",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  "&:hover": {
    backgroundColor: "rgba(248, 75, 14, 0.75)",
  },
});

export default CustomButton;
