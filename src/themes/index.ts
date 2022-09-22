import { DARK } from "./lib/Dark"
import { LIGHT } from "./lib/Light"
import { BLUE } from "./lib/Blue"

import { Theme } from "./type/Theme"

interface ThemesExport {
  [key: string]: Theme
}

export const THEMES: ThemesExport = {
  "dark": DARK,
  "light": LIGHT,
  "blue": BLUE
}

// Setting the default theme based on the ENVIRONMENT VARIABLE
export const defaultTheme: Theme = THEMES[process.env.REACT_APP_DEFAULT_THEME as string]

// A string list of all the themes available
export const availableThemes: string[] = Object.keys(THEMES).map(v => v)