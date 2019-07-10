import types from '../actions/types';
import {
  inProgressTypeName,
  successTypeName,
  errorTypeName
} from '../helpers/actions';

const initialState = {
  tracks: [],
  loading: false,
  error: null
};

const structureTrackData = (tracks) => {
  const minuteSeconds = 60;
  const newtracks = tracks.map(track => {
    if (track.duration) {
      const minutes = Math.floor(track.duration / minuteSeconds);
      const seconds = Math.floor(track.duration % minuteSeconds);
      track.duration = `${minutes}:${seconds}`;
    }
    return track;
  });
  return newtracks;
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
        tracks: structureTrackData(action.tracks),
        loading: false
      };
    case errorTypeName(types.GET_TRACKS):
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}

export default tracksReducer;
