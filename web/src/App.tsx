import { AllRoutes } from "./routes";
import { GlobalStyles } from "./themes/styles";
import { Theme } from "./themes/themes";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
        main: '#2c33a8',
    },
    secondary: {
        main: '#fc0fc1',
    }
  },
});

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
        <Theme>
            <GlobalStyles />
            <AllRoutes />
        </Theme>
    </ThemeProvider>
  );
}