import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { store } from './app/store';
import { Provider } from 'react-redux';
import theme from './styled/styled-theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
)
