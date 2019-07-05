import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Headset from '@material-ui/icons/Headset';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import makeStyles from './header.styles';

const Header = () => {
  const classes = makeStyles();

  return (
    <AppBar position='fixed'>
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
