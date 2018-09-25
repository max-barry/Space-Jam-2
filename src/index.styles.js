import { injectGlobal } from 'react-emotion';

const fontFamily = `'GROBOLD', sans-serif`;

injectGlobal`
    html, body {
        font-family: ${fontFamily};
    }

    html {
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body, h1, h2, h3, h4, h5, h6, p, ol, ul {
        margin: 0;
        padding: 0;
        font-weight: normal;
    }

    input, button {
        font-family: ${fontFamily};
    }

    button {
        box-shadow: none;
        background-color: transparent;
        border: 0;
        cursor: pointer;
        padding: 0;
    }

    ol, ul {
        list-style: none;
        margin-bottom: 0;
    }

    img {
        max-width: 100%;
        height: auto;
        display: block;
    }

    iframe, figure {
        border: 0;
        margin: 0;
        display: block;
        box-shadow: none;
    }

    @font-face {
        font-family: "GROBOLD";
        font-style: normal;
        font-weight: normal;
        src: url(/fonts/grobold.woff2) format('woff2'),
             url(/fonts/grobold.woff) format('woff');
        font-display: optional;
    }

`;
