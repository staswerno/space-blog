import { createTheme } from "@mui/material/styles";
import { grey, deepPurple, teal, green } from "@mui/material/colors";

const mode = "light";

const theme = createTheme({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: deepPurple,
          divider: deepPurple[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: teal[200],
            light: teal[100],
            dark: teal[300],
          },
          divider: teal[200],
          background: {
            default: "#121212",
            paper: "#161616",
          },
          text: {
            primary: teal[200],
            secondary: grey[200],
          },
        }),
  },
  typography: {
    fontFamily: "Space Mono",
  },
});

export { theme };
