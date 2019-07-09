import React from 'react';
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography
} from '@material-ui/core';
import {
  AccountCircle,
  Headset,
  MenuIcon
} from '@material-ui/icons';
import makeStyles from './header.styles';

const Header = () => {
  const classes = makeStyles();

  return (
    <AppBar position='static'>
      <Toolbar variant='dense' className={classes.toolbar}>
        <IconButton
          edge='start'
          color='inherit'
          aria-label='Menu'
        >
          <MenuIcon />
        </IconButton>

        <span className={classes.logo}>
          <Headset className={classes.logoIcon}/>
          <Typography variant='h5'>
            Audio
          </Typography>
        </span>

        <IconButton
          edge='start'
          color='inherit'
          aria-label='Profile'
        >
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
