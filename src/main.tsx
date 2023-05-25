import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import "./styles/main.scss";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2EC4B6",
      contrastText:"#fff",
    },
    secondary: {
      main: "#E1E1E1",
      contrastText:"#000000B2",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1240,
      xl: 1536,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
