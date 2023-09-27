"use client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";


const themeOptions = {
  typography: {
    fontFamily: "Roboto",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  palette: {
    mode: "light",
    primary: {
      main: "#3e35a3",
    },
    secondary: {
      main: "#50d9ee",
    },
  },

};

export const theme = createTheme(themeOptions);

export default function ThemeRegistry({ children }) {
  return (
    // <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
    // </NextAppDirEmotionCacheProvider>
  );
}
