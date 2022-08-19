import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/app/store';
import { GlobalStyles } from './assets/styles/GlobalStyles.styles';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <GlobalStyles />
    </Provider>
  </React.StrictMode>
);
