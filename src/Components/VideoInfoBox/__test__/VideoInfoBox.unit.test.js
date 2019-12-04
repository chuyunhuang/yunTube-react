import React from 'react';
import { shallow } from 'enzyme';
import { VideoInfoBox } from '../VideoInfoBox';

describe('VideoInfoBox', () => {
  test('render VideoInfoBox in default mode, text collapsed', () => {
    const wrapper = shallow(<VideoInfoBox />)
    expect(wrapper).toMatchSnapshot();
  });

  test('render VideoInfoBox, text expand', () => {
    const wrapper = shallow(<VideoInfoBox />)
    wrapper.setState({ collapsed: false })
    expect(wrapper).toMatchSnapshot();
  });

})