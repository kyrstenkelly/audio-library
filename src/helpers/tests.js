import React from 'react';
import { shallow } from 'enzyme'
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

const theme = createMuiTheme({});

export const shallowWithTheme = (Component, props) => {
  return shallow(
    <MuiThemeProvider theme={theme}>
      <Component {...props}></Component>
    </MuiThemeProvider>
  );
};
