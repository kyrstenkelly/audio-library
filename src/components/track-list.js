import React from 'react';
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
import { TrackType } from '../helpers/prop-types';
import styles from './track-list.styles';

const TrackList = (props) => {
  const {
    classes,
    tracks,
    playTrack,
    pause
  } = props;

  const playPauseTrack = (track) => {
    if (track.playing) {
      pause();
    } else {
      playTrack(track);
    }
  }

  const onDoubleClick = (track) => {
    playTrack(track);
  }

  if (!tracks || !tracks.length) {
    return null;
  }

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
            <TableRow key={track.title} onDoubleClick={() => onDoubleClick(track)}>
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
                  onClick={() => playPauseTrack(track)}
                >
                  {track.playing ?
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

TrackList.propTypes = {
  tracks: PropTypes.arrayOf(TrackType),
  playTrack: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired
};

export default withStyles(styles)(TrackList);
