import React, { Context, createContext, useReducer, HTMLProps, useContext } from "react"
import { ThemeProviderValue } from "src/providers/ThemeContextProvider/type"
import { THEMES, defaultTheme } from "src/themes"
import { Theme } from "src/themes/type/Theme"

const themeReducer = (currentTheme: Theme, action: string): Theme => {
  const newTheme = THEMES[action]
  // By default, just give us the default theme
  if (newTheme === undefined) {
    return defaultTheme
  }
  return newTheme
}

// Creating the context. This doesn't get exported
const ThemeContext: Context<ThemeProviderValue | null> =
  createContext<ThemeProviderValue | null>(null)

// Using the context. This does get exported for usage
export const useThemeContext = (): ThemeProviderValue => {
  const themeContext = useContext(ThemeContext)
  if (themeContext === null) {
    throw new Error("Theme Context cannot be used like this!")
  }
  return themeContext
}

// And here is the provider for our awesome themes
export function ThemeContextProvider({children}: HTMLProps<any>) {
  const [theme, dispatch] = useReducer(themeReducer, defaultTheme)

  return (
    <ThemeContext.Provider value={{
      theme: theme,
      dispatch: dispatch
    }}>
      {children}
    </ThemeContext.Provider>
  )
}