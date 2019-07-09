import { shallowWithTheme } from '../helpers/test-helper';
import AudioPlayer from './audio-player';

it('renders correctly', () => {
  const wrapper = shallowWithTheme(AudioPlayer);
  expect(wrapper).toMatchSnapshot();
});
