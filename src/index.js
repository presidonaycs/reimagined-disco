import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/pages-icons.css';
import './assets/css/pages-sidebar.css';
import './assets/css/index.css';
import './assets/css/general.css';
import 'antd/dist/antd.css';
import reportWebVitals from './reportWebVitals';
import { colors, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { green, red } from '@material-ui/core/colors';
import App from './App';



const theme = createMuiTheme({
  palette:{
    primary:{
      main:green[800]
      },
    secondary:{
      main:'#d5ffd5'
  },
  error:{
    main:red[600]
  }
  }
})










ReactDOM.render(

  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

