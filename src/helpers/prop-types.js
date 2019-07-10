import PropTypes from 'prop-types';

export const TrackType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  durationLabel: PropTypes.string.isRequired,
  album: PropTypes.string
})
