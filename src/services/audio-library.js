import config from '../config';
const url = config.REACT_APP_AUDIO_API_URL;

export default {
  getTracks: () => {
    return fetch(`${url}/tracks`)
      .then(res => res.json())
      .then(tracks => ({ tracks }));
  }
}
