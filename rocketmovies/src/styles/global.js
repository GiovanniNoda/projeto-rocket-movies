import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    :root {
        font-size: 62.5%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BODY};
        color: ${({ theme }) => theme.COLORS.WHITE};

        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: "Roboto Slab", sans-serif;
        font-size: 1.6rem;
        outline: none;
    }

    a {
        text-decoration: none;
    }

    a, button {
        cursor: pointer;
        transition: filter 0.2s;
    }

    a:hover, button:hover {
        filter: brightness(0.9);
    }
`