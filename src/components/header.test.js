import { shallowWithTheme } from '../helpers/test-helper';
import Header from './header';
it('renders correctly', () => {
  const wrapper = shallowWithTheme(Header);
  expect(wrapper).toMatchSnapshot();
});
