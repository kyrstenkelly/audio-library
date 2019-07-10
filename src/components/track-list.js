import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core';
import {
  PlayArrow,
  Pause
} from '@material-ui/icons';
import { withStyles } from '@material-ui/styles';
import { actionsBinder } from '../helpers/actions';
import { TrackType } from '../helpers/prop-types';
import styles from './track-list.styles';

const mapStateToProps = (state) => ({
  currentTrack: state.currentTrack,
  error: state.error,
  loading: state.loading,
  playing: state.playing,
  tracks: state.tracks
});

const mapDispatchToProps = actionsBinder('getTracks', 'playTrack', 'pause');

class TrackList extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    currentTrack: TrackType,
    error: PropTypes.string,
    getTracks: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    playing: PropTypes.bool.isRequired,
    playTrack: PropTypes.func.isRequired,
    pause: PropTypes.func.isRequired,
    tracks: PropTypes.arrayOf(TrackType),
  }

  componentDidMount() {
    this.props.getTracks();
  }

  playPauseTrack(track) {
    if (track.playing) {
      this.props.pause();
    } else {
      this.props.playTrack(track);
    }
  }

  isTrackPlaying (track) {
    return this.props.currentTrack && this.props.playing
      && track.filename === this.props.currentTrack.filename;
  }

  render() {
    const { classes, tracks } = this.props;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead className={classes.tableHead}>
            <TableRow>
              {/* Empty header cell for the play button column */}
              <TableCell className={classes.playTrackCell}></TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Artist</TableCell>
              <TableCell>Album</TableCell>
              <TableCell>Duration</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {tracks.map(track =>
              <TableRow key={track.title} onDoubleClick={() => this.props.playTrack(track)}>
                {/* On mobile, put most track info in one cell so we can format vertically */}
                <TableCell className={classes.mobileTrackInfo}>
                  <span className={classes.mobileTrackInfo__title}>{track.title}</span>
                  <span className={classes.mobileTrackInfo__artist_album}>
                    <span>{track.artist}</span>
                    {track.album && <span className={classes.separator}>&#183;</span>}
                    {track.album && <span>{track.album}</span>}
                  </span>
                </TableCell>

                {/* Normal table cells for tablet+ */}
                <TableCell className={classes.desktopTrackInfo} align='center'>
                  <IconButton
                    className={classes.playButton}
                    color='secondary'
                    aria-label='Play'
                    onClick={() => this.playPauseTrack(track)}
                  >
                    {this.isTrackPlaying(track) ?
                      <Pause />
                      :
                      <PlayArrow />
                    }
                  </IconButton>
                </TableCell>
                <TableCell className={classes.desktopTrackInfo}>{track.title}</TableCell>
                <TableCell className={classes.desktopTrackInfo}>{track.artist}</TableCell>
                <TableCell className={classes.desktopTrackInfo}>{track.album}</TableCell>
                <TableCell className={classes.desktopTrackInfo}>{track.duration}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(TrackList));
