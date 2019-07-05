import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import teal from '@material-ui/core/colors/teal';
import blueGrey from '@material-ui/core/colors/blueGrey';
import React from 'react';
import Header from './components/header';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      default: blueGrey[900]
    },
    primary: {
      light: blueGrey[700],
      main: blueGrey[900],
      dark: blueGrey[900],
      contrastText: '#ffffff'
    },
    secondary: {
      light: '#52c7b8',
      main: teal[500],
      dark: teal[800],
      contrastText: '#ffffff'
    }
  },
});


function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline/>
      <Header/>
    </MuiThemeProvider>
  );
}

export default App;
