/**
 * Temporary mock data, to be removed
 * when we hook up to the back end
 */
const tracks = [{
  title: 'Track 1',
  artist: 'Big Blue Beatle',
  album: 'The Thing',
  length: '4:30'
}, {
  title: 'A Slightly Longer Name',
  artist: 'Short',
  album: 'A Slightly Longer Name',
  length: '2:47'
}];
/** ----------------------------- */

export default {
  getTracks: async () => {
    return new Promise((resolve, _) => {
      resolve({ tracks });
    });
  }
}
