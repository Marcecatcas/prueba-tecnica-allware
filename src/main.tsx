import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import store  from './redux/store.ts'
import { StyledComponentsThemeProvider, MuiThemeProvider, theme } from './styles/theme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <Provider store={store}>
      <MuiThemeProvider theme={theme}>
      <StyledComponentsThemeProvider theme={theme}>
    <React.StrictMode>
    <App />
  </React.StrictMode>,
  </StyledComponentsThemeProvider>
  </MuiThemeProvider>,
  </Provider>
)
