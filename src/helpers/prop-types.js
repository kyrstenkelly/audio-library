import PropTypes from 'prop-types';

export const TrackType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  album: PropTypes.string
})
