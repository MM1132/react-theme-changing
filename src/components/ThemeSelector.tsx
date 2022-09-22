import React from "react"
import { useThemeContext } from "src/providers/ThemeContextProvider";
import { availableThemes } from "src/themes";

// This component shall be a simple dropdown list for changing the theme
export function ThemeSelector() {
  const { dispatch } = useThemeContext()

  function changeSelectionHandler(event: React.ChangeEvent<HTMLSelectElement>): void {
    dispatch(event.target.value)
  }

  return (
    <div>
      <label htmlFor="themes">Change theme:</label>
      <select id="themes" onChange={changeSelectionHandler}>
        {
          availableThemes.map((v: string, i: number) => {
          return <option
            key={i}
            value={v}
          >
            {v}
          </option>
        })}
      </select>
    </div>
  )
}