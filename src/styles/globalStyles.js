import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
    }
    
    body {
	    font-family: sans-serif;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

`;

export {GlobalStyles};