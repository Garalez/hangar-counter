import React from 'react';
import ReactDOM from 'react-dom/client';
import '@radix-ui/themes/styles.css';
import { Theme, ThemePanel } from '@radix-ui/themes';
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from 'next-themes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider attribute='class'>
      <Theme
        accentColor='indigo'
        grayColor='slate'
        panelBackground='solid'
        scaling='110%'
        radius='large'>
        <App />
        {/* <ThemePanel /> */}
      </Theme>
    </ThemeProvider>
  </React.StrictMode>
);
