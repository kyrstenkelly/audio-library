import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import blueGrey from '@material-ui/core/colors/blueGrey';
import teal from '@material-ui/core/colors/teal';
import { createMuiTheme } from '@material-ui/core/styles';

import AudioPlayer from './views/audio-player';
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
      main: '#52c7b8',
      dark: teal[500],
      contrastText: '#ffffff'
    }
  },
});


function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline/>
      <Header/>

      <AudioPlayer/>
    </MuiThemeProvider>
  );
}

export default App;
