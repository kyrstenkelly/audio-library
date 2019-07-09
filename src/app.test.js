import App from './app';
import { shallowWithTheme } from '../helpers/tests';

it('renders correctly', () => {
  const wrapper = shallowWithTheme(App);
  expect(wrapper).toMatchSnapshot();
});
