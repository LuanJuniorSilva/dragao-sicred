import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import { getConfig } from '../utils/functions'

export default createGlobalStyle`

html {
  --color-1: ${getConfig()?.color1};
  --color-2: ${getConfig()?.color2};
  --color-3: ${getConfig()?.color3};
  --color-4: ${getConfig()?.color4};
  --color-5: ${getConfig()?.color5};
  --gap-s: 0.625rem;
  --gap: 1.25rem;
}

html, body, #root {
  height: 100%;
}

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  body {
    font-family: sans-serif;
    margin: 0;
    color: var(--color-2);
    background-color: var(--color-4);
  }

  button {
    font-family: sans-serif;
    font-size: 1rem;
    cursor: pointer;
  }

  h1, h2, h3 {
    font-weight: 600;
    margin: 0;
  }

  ul {
    list-style: none;
    padding: 0px;
    margin: 0px;
  }

  .container {
    display: grid;
    padding: var(--gap);
    gap: var(--gap);
    grid-template-columns: 240px auto;
  }

  @media (max-width: 700px) {
    html {
      --gap-s: 0.5rem;
      --gap: 0.75rem;
    }
    .container {
      grid-template-columns: 1fr;
    }
  }
`;