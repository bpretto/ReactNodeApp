import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";

const fontSizes: any = [16, 24, 100];
fontSizes.body = fontSizes[0];
fontSizes.bodyLarge = fontSizes[1];
fontSizes.displayExtraLarge = fontSizes[2];

const navy = "#2c33a8"
const babypink = "#ff91e4"
const hotpink = "#fc0fc1"
const white = "#fff"

export const theme = {
    fontSizes,
    colors: {
        navy,
        babypink,
        hotpink,
        white
    }
}

export type ThemeType = typeof theme;

export const Theme: React.FC<PropsWithChildren> = ({children}) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
};