import { Context, Dispatch, HTMLProps } from "react"
import { Theme } from "src/themes/type/Theme"

export interface ThemeProviderValue {
  theme: Theme;
  dispatch: Dispatch<string>;
}