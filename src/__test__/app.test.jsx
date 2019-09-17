import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('Home component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div'));
  });
});
