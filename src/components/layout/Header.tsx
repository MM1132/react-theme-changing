import React from "react"

import { RobertNavbar } from "src/components/robert-ui/RobertNavbar"
import { RobertButtonProps } from "src/components/robert-ui/RobertButton";

const buttonHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
  console.log(`${e.target} clicked! `)
}

const navbarConfig:RobertButtonProps[] = [
  { children: "First Button" },
  { children: "Event Listener", clickHandler: buttonHandler },
  { children: "Third Button" },
  { children: "Fourth Button" },
]

export function Header():JSX.Element {
  return (
    <RobertNavbar
      {...navbarConfig}
    />
  )
}