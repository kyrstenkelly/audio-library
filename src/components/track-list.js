import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core';
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

  renderTrackRow(track) {
    const { classes } = this.props;

    return (
      <TableRow key={track.title}>
        {/* One table cell for mobile so we can display info vertically */}
        <TableCell className={classes.mobileTrackInfo}>
          <span className={classes.mobileTrackInfo__title}>{track.title}</span>
          <span className={classes.mobileTrackInfo__artist_album}>
            <span>{track.artist}</span>
            {track.album && <span className={classes.separator}>&#183;</span>}
            {track.album && <span>{track.album}</span>}
          </span>
        </TableCell>

        {/* Normal table cells for tablet+ */}
        <TableCell className={classes.desktopTrackInfo}>{track.title}</TableCell>
        <TableCell className={classes.desktopTrackInfo}>{track.artist}</TableCell>
        <TableCell className={classes.desktopTrackInfo}>{track.album}</TableCell>
        <TableCell className={classes.desktopTrackInfo}>{track.duration}</TableCell>
      </TableRow>
    );
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
                  <TableCell className={classes.trackTitle}>Title</TableCell>
                  <TableCell className={classes.trackArtist}>Artist</TableCell>
                  <TableCell className={classes.trackAlbum}>Album</TableCell>
                  <TableCell className={classes.trackDuration}>Duration</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {tracks.map(t => this.renderTrackRow(t))}
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
