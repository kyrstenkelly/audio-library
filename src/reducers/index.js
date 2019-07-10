import types from '../actions/types';
import {
  inProgressTypeName,
  successTypeName,
  errorTypeName
} from '../helpers/actions';

const initialState = {
  currentTrack: null,
  playing: false,
  tracks: [],
  loading: false,
  error: null
};

const structureTrackData = (state, tracks) => {
  const minuteSeconds = 60;
  return tracks.map(track => {
    if (track.duration) {
      const minutes = Math.floor(track.duration / minuteSeconds);
      const seconds = Math.floor(track.duration % minuteSeconds);
      track.duration = `${minutes}:${seconds}`;
    }
    // Add "playing" property based on currentTrack state
    track.playing = state.playing && track.filename === state.currentTrack.filename;
    return track;
  });
}

const updateTracks = (tracks, currentTrack, playing) => {
  const currentTrackPlaying = !!currentTrack & playing;
  return tracks.map(track => ({
    ...track,
    playing: currentTrackPlaying && track.filename === currentTrack.filename
  }));
}

function tracksReducer(state = initialState, action) {
  switch (action.type) {
    case inProgressTypeName(types.GET_TRACKS):
      return {
        ...state,
        loading: true
      }
    case successTypeName(types.GET_TRACKS):
      return {
        ...state,
        tracks: structureTrackData(state, action.tracks),
        loading: false
      };
    case errorTypeName(types.GET_TRACKS):
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case types.PLAY_TRACK:
      const currentTrack = action.payload || state.tracks[0];
      return {
        ...state,
        playing: true,
        tracks: updateTracks(state.tracks, currentTrack, true),
        currentTrack
      };
    case types.PAUSE:
      return {
        ...state,
        playing: false,
        tracks: updateTracks(state.tracks, state.currentTrack, false)
      };
    default:
      return state;
  }
}

export default tracksReducer;
