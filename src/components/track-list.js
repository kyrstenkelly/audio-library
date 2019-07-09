import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core';
import { connectWithStyles } from '../helpers/components';
import styles from './header.styles';

const mapStateToProps = (state) => ({
  tracks: state.tracks,
  loading: state.loading,
  error: state.error
});

const dispatch = ['getTracks'];

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
              <TableHead>
                <TableRow>
                  <TableCell>Track</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tracks.map(track =>
                  <TableRow key={track.title}>
                    <TableCell component="th" scope="row">
                      {track.title}
                    </TableCell>
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

export default connectWithStyles(
  styles,
  mapStateToProps,
  dispatch,
  TrackList
);
