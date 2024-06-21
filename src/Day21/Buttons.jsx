import { Stack, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import { green, red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
    secondary: {
      main: green[500],
    },
    success: red,
  },
  typography: {
    fontFamily: "Playwrite",
    fontWeightLight: 400,
  },
});
function Buttons() {
  return (
    <ThemeProvider theme={theme}>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="primary">
          Primary
        </Button>

        <Button color="secondary">Secondary</Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>
    </ThemeProvider>
  );
}

export default Buttons;
