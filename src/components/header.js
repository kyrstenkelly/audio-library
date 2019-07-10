import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography
} from '@material-ui/core';
import {
  AccountCircle,
  Headset,
  Menu
} from '@material-ui/icons';
import { withStyles } from '@material-ui/styles';
import styles from './header.styles';

const Header = ({ classes }) => {
  return (
    <AppBar position='static'>
      <Toolbar variant='dense' className={classes.toolbar}>
        <IconButton
          edge='start'
          color='inherit'
          aria-label='Menu'
        >
          <Menu />
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

Header.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Header);
