import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#085438",
    },
    secondary: {
      main: "#D89741",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
