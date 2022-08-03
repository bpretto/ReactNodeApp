import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./themes";

export const GlobalStyles = createGlobalStyle<{theme: ThemeType}>`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

    *{
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
    }

    body {
        background-color: ${({theme}) => theme.colors.navy};
    }
`