import { Theme } from "src/themes/type/Theme"

export interface ThemeProviderValue {
  theme: Theme,
  setTheme(themeLabel: string): void,
  availableThemes: string[]
}