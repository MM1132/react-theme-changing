import React, { useContext } from "react"
import { ThemeContext } from "src/providers/ThemeProvider";
import { ThemeProviderValue } from "src/providers/ThemeProvider/type/ThemeProvider";

import { RobertButton } from "src/components/robert-ui/RobertButton"

// This component shall be a simple dropdown list for changing the theme
export function ThemeSelector() {
  const { setTheme, availableThemes } = useContext(ThemeContext) as ThemeProviderValue

  function buttonClickHandler(event: React.ChangeEvent<HTMLSelectElement>): void {
    setTheme(event.target.value)
  }

  return (
    <div>
      <label htmlFor="themes">Change theme:</label>
      <select id="themes" onChange={buttonClickHandler}>
        {availableThemes.map((v: string, i: number) => {
          return <option key={i} value={v}>{v}</option>
        })}
      </select>
    </div>
  )
}