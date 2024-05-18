"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStylesheet = createGlobalStyle`
  :root {
    --bg-primary: #191917;
  }
  
  html, body, * {
    font-family: Inter, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html, body {
    background: var(--bg-primary);
    font-family: "inter", sans-serif;
    font-size: 16px;
  }
`;
