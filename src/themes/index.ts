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