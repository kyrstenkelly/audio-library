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
import { PlayCircleOutline } from '@material-ui/icons';
import { withStyles } from '@material-ui/styles';
import { actionsBinder } from '../helpers/actions';
import styles from './track-list.styles';

const mapStateToProps = (state) => ({
  tracks: state.tracks,
  loading: state.loading,
  error: state.error
});

const mapDispatchToProps = actionsBinder('getTracks');

export class TrackList extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    tracks: PropTypes.array,
    loading: PropTypes.bool,
    error: PropTypes.string,
    getTracks: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.getTracks();
  }

  playTrack(track) {
    console.log('playing track: ', track);
  }

  render() {
    const {
      classes,
      error,
      loading,
      tracks
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
                  <TableRow key={track.title}>
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
                        onClick={() => this.playTrack(track)}
                      >
                        <PlayCircleOutline />
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
        }
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(TrackList));
