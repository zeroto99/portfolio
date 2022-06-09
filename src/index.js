import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Container } from './components/Container';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './style/global';
import theme from './style/theme';
import { ThemeProvider } from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Container>
        <App />
      </Container>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
