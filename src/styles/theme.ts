
import { createTheme } from '@mui/material/styles';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007bff',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

export { StyledComponentsThemeProvider, MuiThemeProvider, theme };
