import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
  }

  :root {
    --color-bg: #0a0f0a;
    --color-surface: #111811;
    --color-surface-2: #172017;
    --color-border: rgba(163, 220, 80, 0.15);
    --color-border-hover: rgba(163, 220, 80, 0.35);
    --color-accent: #a3dc50;
    --color-accent-muted: rgba(163, 220, 80, 0.12);
    --color-accent-hover: rgba(163, 220, 80, 0.22);
    --color-text: #e8f0e0;
    --color-text-secondary: rgba(232, 240, 224, 0.55);
    --color-error: #e05c5c;
    --color-error-bg: rgba(224, 92, 92, 0.1);
    --color-success: #5cba7a;
    --color-success-bg: rgba(92, 186, 122, 0.1);
    --radius-sm: 8px;
    --radius-md: 12px;
    --radius-lg: 16px;
    --shadow: 0 1px 3px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.3);
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    background-color: var(--color-bg);
    color: var(--color-text);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    color: currentColor;
    text-decoration: none;
    outline: transparent;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    padding: 0;
    margin: 0;
    outline: none;
    background: none;
    border: none;
  }

  button:focus-visible, a:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
    border-radius: var(--radius-sm);
  }

  svg {
    cursor: pointer;
  }

  label {
    cursor: pointer;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  input, textarea, select {
    font-family: inherit;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: var(--color-surface);
  }
  ::-webkit-scrollbar-thumb {
    background: var(--color-border-hover);
    border-radius: 3px;
  }
`;
