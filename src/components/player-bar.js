import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography
} from '@material-ui/core';
import {
  Pause,
  PlayArrow,
  SkipNext,
  SkipPrevious
} from '@material-ui/icons';

import { withStyles } from '@material-ui/styles';
import { TrackType } from '../helpers/prop-types';
import styles from './player-bar.styles';

const PlayerBar = (props) => {
  const {
    classes,
    currentTrack,
    playing,
    pause,
    play,
    previousTrack,
    nextTrack
  } = props;

  const togglePlay = () => {
    if (playing) {
      pause();
    } else {
      play();
    }
  }

  return (
    <AppBar position='static' className={classes.root}>
      <div className={classes.songInfo}>
        <Typography variant='h6'>{currentTrack && currentTrack.title}</Typography>
      </div>

      <Toolbar variant='dense' className={classes.toolbar}>
        <IconButton
          color='secondary'
          aria-label='Previous'
          onClick={previousTrack}
        >
          <SkipPrevious />
        </IconButton>

        <IconButton
          color='secondary'
          data-size='large'
          aria-label={playing ? 'Pause' : 'Play'}
          onClick={togglePlay}
        >
          {playing ? <Pause /> : <PlayArrow />}
        </IconButton>

        <IconButton
          color='secondary'
          aria-label='Next'
          onClick={nextTrack}
        >
          <SkipNext />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

PlayerBar.propTypes = {
  nextTrack: PropTypes.func.isRequired,
  previousTrack: PropTypes.func.isRequired,
  play: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired,
  playing: PropTypes.bool.isRequired,
  currentTrack: TrackType
}

export default withStyles(styles)(PlayerBar);
