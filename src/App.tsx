import React from 'react';
import './App.css';

import { Header } from "src/components/layout/Header"
import { Main } from "src/components/layout/Main"

// THEME
import { ThemeContextProvider } from "./providers/ThemeContextProvider"

export function App(): JSX.Element {
  return (
      <ThemeContextProvider>
        <Header/>
        <Main/>
      </ThemeContextProvider>
  );
}