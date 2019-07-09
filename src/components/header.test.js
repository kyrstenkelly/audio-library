import { shallowWithTheme } from '../helpers/tests';
import Header from './header';

it('renders correctly', () => {
  const wrapper = shallowWithTheme(Header);
  expect(wrapper).toMatchSnapshot();
});
