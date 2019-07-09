import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionsBinder } from '../helpers/actions';

const mapStateToProps = (state) => ({
  tracks: state.tracks,
  loading: state.loading,
  error: state.error
});

const mapDispatchToProps = actionsBinder('getTracks');

export class TrackList extends Component {
  static propTypes = {
    tracks: PropTypes.array,
    loading: PropTypes.bool,
    error: PropTypes.string,
    getTracks: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.getTracks();
  }

  render() {
    const { error, loading, tracks } = this.props;

    return (
      <div>
        {error &&
          <div>An error has occurred.</div>
        }

        {loading &&
          <div>Loading...</div>
        }

        {!error && !loading &&
          <ul>
            {tracks.map(track =>
              <li key={track.title}>{track.title}</li>
            )}
          </ul>
        }
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackList);
