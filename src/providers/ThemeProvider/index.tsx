import React, { createContext, useState } from "react"
import { ThemeProviderValue } from "src/providers/ThemeProvider/type/ThemeProvider"
import { THEMES } from "src/themes"

export const ThemeContext = createContext<ThemeProviderValue | null>(null)

export function ThemeProvider({children}: React.HTMLProps<any>) {
  // Setting the default theme
  const themeLabel: string = process.env.REACT_APP_DEFAULT_THEME as string
  const [theme, setTheme] = useState(THEMES[themeLabel])

  // The callback we can use to change the theme
  function setThemeByLabel(themeLabel: string): void {
    // Check if the theme with the label exists
    const newTheme = THEMES[themeLabel]
    if (newTheme === undefined) return

    setTheme(newTheme)
  }

  const value: ThemeProviderValue = {
    theme: theme,
    setTheme: setThemeByLabel,
    availableThemes: Object.keys(THEMES).map(v => v)
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}