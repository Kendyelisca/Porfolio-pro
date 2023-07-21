import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

ReactDOM.createRoot(document.getElementById('root')).render(
  <I18nextProvider i18n={i18n}>
    <LanguageSelector />
    <App />
  </I18nextProvider>
);
