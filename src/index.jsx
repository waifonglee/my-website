import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from "@chakra-ui/theme-tools";

const root = ReactDOM.createRoot(document.getElementById('root'));


// 2. Update the breakpoints as key-value pairs
const breakpoints = createBreakpoints({
  sm: '48em',
  md: '76.8em',
  lg: '99.2em',
  xl: '128em',
  '2xl': '153.6em',
})

// 3. Extend the theme
const theme = extendTheme({ breakpoints })
root.render(
  <ChakraProvider >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
);

