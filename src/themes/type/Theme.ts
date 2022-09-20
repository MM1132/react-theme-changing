export interface Color {
  primary: string,
  secondary: string,
}

export interface Border {
  color: Color,
  strokeWidth: string
}

export interface Theme {
  textColor: Color,
  color: Color,
  border: Border
}
