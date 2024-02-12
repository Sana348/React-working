import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme : () => {},
    LightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider