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
    return track;
  });
}

const getPreviousTrack = (currentTrack, tracks) => {
  let newIndex = 0;
  if (currentTrack) {
    // TODO: Add unique ID on track metadata to prevent filename clashes
    const currentTrackIndex = tracks.findIndex(track =>
      track.filename === currentTrack.filename);
    newIndex = currentTrackIndex - 1;
    if (newIndex < 0) {
      newIndex = tracks.length - 1;
    }
  }
  return tracks[newIndex];
}

const getNextTrack = (currentTrack, tracks) => {
  let newIndex = 0;
  if (currentTrack) {
    // TODO: Add unique ID on track metadata to prevent filename clashes
    const currentTrackIndex = tracks.findIndex(track =>
      track.filename === currentTrack.filename);
    newIndex = currentTrackIndex + 1;
    if (newIndex > tracks.length - 1) {
      newIndex = 0;
    }
  }
  return tracks[newIndex];
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
        currentTrack
      };
    case types.PREVIOUS_TRACK:
      return {
        ...state,
        currentTrack: getPreviousTrack(state.currentTrack, state.tracks)
      };
    case types.NEXT_TRACK:
      return {
        ...state,
        currentTrack: getNextTrack(state.currentTrack, state.tracks)
      };
    case types.PAUSE:
      return {
        ...state,
        playing: false
      };
    default:
      return state;
  }
}

export default tracksReducer;
