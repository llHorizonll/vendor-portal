import { createTheme, ThemeProvider } from "@mui/material/styles";
import { lightTheme } from "./lightTheme";
import { darkTheme } from "./darkTheme";
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const ColorModeContext = createContext({});

export const ColorModeContextProvider = ({ children }) => {
  const colorModeFromLocalStorage = localStorage.getItem("colorMode");
  const isSystemPreferenceDark = window?.matchMedia("(prefers-color-scheme: dark)").matches;

  const systemPreference = isSystemPreferenceDark ? "dark" : "light";
  const [mode, setMode] = useState(colorModeFromLocalStorage || systemPreference);

  useEffect(() => {
    window.localStorage.setItem("colorMode", mode);
  }, [mode]);

  const setColorMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  const theme = createTheme(mode === "light" ? lightTheme : darkTheme);

  return (
    <ColorModeContext.Provider
      value={{
        setMode: setColorMode,
        mode,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

ColorModeContextProvider.propTypes = {
  children: PropTypes.node,
};
