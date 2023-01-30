import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }

    body{
        width: 100%;
        min-height: 100vh;
    }

    :root{
        --White: hsl(0, 0%, 100%);
        --Black: hsl(0, 0%, 0%);
        --Dark-Gray: hsl(0, 0%, 55%);
        --Very-Dark-Gray: hsl(0, 0%, 41%);
        --Alata: 'Alata', sans-serif;
        --JosefinSans: 'Josefin Sans', sans-serif;
    }
`;


export default GlobalStyle;