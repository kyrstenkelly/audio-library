import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { actionsBinder } from '../helpers/actions';
import TrackList from '../components/track-list';
import PlayerBar from '../components/player-bar';
import { TrackType } from '../helpers/prop-types';
import styles from './audio-player.styles';

const mapStateToProps = (state) => ({
  currentTrack: state.currentTrack,
  error: state.error,
  loading: state.loading,
  playing: state.playing,
  tracks: state.tracks
});

const mapDispatchToProps = actionsBinder('getTracks', 'playTrack', 'pause');

export class AudioPlayer extends Component {
  static propTypes = {
    currentTrack: TrackType,
    classes: PropTypes.object.isRequired,
    tracks: PropTypes.arrayOf(TrackType),
    loading: PropTypes.bool,
    error: PropTypes.string,
    getTracks: PropTypes.func.isRequired,
    playTrack: PropTypes.func.isRequired,
    pause: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.getTracks();
  }

  render() {
    const {
      currentTrack,
      error,
      loading,
      playing,
      tracks,
      playTrack,
      pause
    } = this.props;

    return (
      <div>
        {error &&
          <div>An error has occurred.</div>
        }

        {loading &&
          <div>Loading...</div>
        }

        {!error && !loading &&
          <div>
            <TrackList
              tracks={tracks}
              playTrack={playTrack}
              pause={pause}
            />
            <PlayerBar
              currentTrack={currentTrack}
              playing={playing}
              play={() => playTrack(currentTrack)}
              pause={pause}
              nextTrack={() => console.log('next')}
              previousTrack={() => console.log('previous')}
            />
          </div>
        }
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(AudioPlayer));
