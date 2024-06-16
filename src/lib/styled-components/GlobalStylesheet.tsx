"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStylesheet = createGlobalStyle`
  :root {
    --bg-secondary: #171715;
    --bg-primary: #141411;
    --app-primary: #B99D78;
    --text-primary: #eee;
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

  a {
    color: #bb9c76;
  }
`;
