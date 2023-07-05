import {mount} from 'enzyme';
import App from './App';

describe('Enzyme', () => {
    it('renders correctly', () => {
      const component = mount(<App />);
      expect(component.find('button').first().text()).toEqual("0");
    });
  });