import React from 'react';
import './App.css';

import { Header } from "src/components/layout/Header"
import { Main } from "src/components/layout/Main"

// THEME
import { ThemeProvider } from "src/providers/ThemeProvider"

export function App():JSX.Element {
  const darkTheme = "Dark theme context value"

  return (
      <ThemeProvider>
        <Header/>
        <Main/>
      </ThemeProvider>
  );
}