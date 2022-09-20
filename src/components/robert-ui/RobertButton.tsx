import React, { useContext } from "react"
import { ThemeContext } from "src/providers/ThemeProvider"
import styled from 'styled-components';
import { ThemeProviderValue } from "src/providers/ThemeProvider/type/ThemeProvider"

export interface RobertButtonProps extends React.HTMLProps<any> {
  clickHandler?(...props: any): void
}

const Button = styled.button`
  color: ${props => props.theme.textColor.primary};
  border: ${props => props.theme.border.strokeWidth} solid ${props => props.theme.border.color.primary};
  padding: 1rem 2rem;
  font-size: 1.25rem;
  background-image: linear-gradient(0deg, ${props => props.theme.color.primary} 50%, ${props => props.theme.color.secondary} 50%);
  cursor: pointer;
  transition: .2s;
  background-position-y: 100%;
  background-size: 200% 200%;
  
  &:hover {
    background-position-y: 0%;
  }
`;

export function RobertButton({children, clickHandler}: RobertButtonProps):JSX.Element {
  const { theme } = useContext(ThemeContext) as ThemeProviderValue

  return (
    <Button
      theme={theme}
      onClick={clickHandler}
    >
      {children}
    </Button>
  );
}