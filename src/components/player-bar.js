import React, { Component } from 'react';
import { connect } from 'react-redux';
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
import { actionsBinder } from '../helpers/actions';
import config from '../config';
import styles from './player-bar.styles';

const mapStateToProps = (state) => ({
  currentTrack: state.currentTrack,
  playing: state.playing
});

const mapDispatchToProps = actionsBinder('playTrack', 'pause', 'nextTrack', 'previousTrack');

class PlayerBar extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    currentTrack: TrackType,
    nextTrack: PropTypes.func.isRequired,
    previousTrack: PropTypes.func.isRequired,
    playTrack: PropTypes.func.isRequired,
    pause: PropTypes.func.isRequired,
    playing: PropTypes.bool.isRequired,
  }

  state = {
    playProgress: 0
  }

  componentDidMount() {
    // Play the next song when current one ends
    this._audio.onended = () => {
      this.props.nextTrack();
    }

    this._audio.ontimeupdate = () => {
      const current = this._audio.currentTime;
      const total = this.props.currentTrack.duration;
      this.setState({
        playProgress: ((current / total) * 100).toFixed(2)
      });
    }
  }

  componentWillReceiveProps(newProps) {
    const { currentTrack, playing } = newProps;
    if (currentTrack && currentTrack.filename) {
      const newSource = `${config.REACT_APP_AUDIO_API_URL}/static/${currentTrack.filename}`;
      if (this._audio.src !== newSource) {
        this._audio.src = newSource;
      }
    }
    if (playing) {
      this._audio.play()
        .catch(error => {
          console.error(error);
          this.props.pause();
        });
    } else {
      this._audio.pause()
    }
  }

  togglePlay() {
    const { currentTrack, pause, playing, playTrack } = this.props;;

    if (playing) {
      pause();
    } else {
      playTrack(currentTrack);
    }
  }

  render() {
    const {
      classes,
      currentTrack,
      nextTrack,
      previousTrack,
      playing
    } = this.props;

    return (
      <AppBar position='static' className={classes.root}>
        <div className={classes.progressBarContainer}>
          <div
            className={classes.progressBar}
            style={{width: `${this.state.playProgress}%`}}
          ></div>
        </div>

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
            onClick={() => this.togglePlay()}
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

        <audio ref={(a) => this._audio = a}>
          <source type='audio/mp3'/>
        </audio>
      </AppBar>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(PlayerBar));
