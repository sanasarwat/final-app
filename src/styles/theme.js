import { createMuiTheme } from "@material-ui/core/styles";
import { lightGreen, deepOrange, grey } from "@material-ui/core/colors";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    h6: {
      fontWeight: 600,
      fontFamily: "Roboto",
      fontSize: "1rem",
    },
    h5: {
      fontWeight: 600,
      fontFamily: "Roboto",
      fontSize: "1.25rem",
    },
    h4: {
      fontWeight: 600,
      fontFamily: "Roboto",
      fontSize: "1.5rem",
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: "1rem",
    },
    subtitle2: {
      fontWeight: 600,
      fontSize: "0.9rem",
    },
  },

  palette: {
    primary: {
      main: lightGreen[500],
    },
    secondary: {
      main: deepOrange[500],
    },
    text: {
      secondary: grey[600],
    },
    status: {
      danger: deepOrange[500],
    },
  },
});

export default theme;
