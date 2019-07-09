import types from 'actions/types';
import {
  inProgressTypeName,
  successTypeName,
  errorTypeName
} from 'helpers/actions';

const initialState = {
  tracks: [],
  loading: false,
  error: false
};

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
        tracks: action.payload,
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
