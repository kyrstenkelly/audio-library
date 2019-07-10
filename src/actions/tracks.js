import Types from './types';
import audioLibraryService from '../services/audio-library';

export default {
  getTracks: () => ({
    type: Types.GET_TRACKS,
    async: true,
    httpMethod: audioLibraryService.getTracks,
    params: []
  }),

  playTrack: (fileName) => ({
    type: Types.PLAY_TRACK,
    payload: fileName
  }),

  pause: () => ({ type: Types.PAUSE })
}
