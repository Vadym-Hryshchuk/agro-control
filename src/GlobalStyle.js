import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background-color:  #050505;
    color: white
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
    outline: transparent;
    background: none;
    border: none;
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
    height: 100%;
  }
  &.overlay {
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  `;
