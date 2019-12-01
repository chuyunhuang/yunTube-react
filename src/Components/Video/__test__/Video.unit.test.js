import React from 'react';
import { shallow } from 'enzyme';
import { Video } from '../Video';

describe('Video', () => {
  test('renders Video component correctly with an id', () => {
    const wrapper = shallow(<Video id="testing" />)
    expect(wrapper).toMatchSnapshot();
  });

  test('render null if an id is not given to the Video component', () => {
    const wrapper = shallow(<Video />)
    expect(wrapper).toMatchSnapshot();
  });
});