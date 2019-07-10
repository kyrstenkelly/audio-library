import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import blueGrey from '@material-ui/core/colors/blueGrey';
import teal from '@material-ui/core/colors/teal';
import { createMuiTheme } from '@material-ui/core/styles';

import Header from './components/header';
import TrackList from './components/track-list';
import PlayerBar from './components/player-bar';

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

      <TrackList />
      <PlayerBar />
    </MuiThemeProvider>
  );
}

export default App;
