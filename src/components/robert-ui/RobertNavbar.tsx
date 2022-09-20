import React from "react"
import { RobertButtonProps, RobertButton } from "src/components/robert-ui/RobertButton";

// Takes in a configuration object, with a specific format
export function RobertNavbar(propsList: RobertButtonProps[]):JSX.Element {
  return (
    <div>
      {Object.values(propsList).map((v: RobertButtonProps, i: number) => {
        return <RobertButton key={i} {...v}></RobertButton>
      })}
    </div>
  )
}
