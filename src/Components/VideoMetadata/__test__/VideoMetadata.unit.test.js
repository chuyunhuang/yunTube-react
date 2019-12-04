import React from 'react';
import { shallow } from 'enzyme';
import { VideoMetadata } from '../VideoMetadata';

describe('VideoMetadata', () => {
  test('renders VideoMetadata without props', () => {
    const wrapper = shallow(<VideoMetadata />)
    expect(wrapper).toMatchSnapshot();
  });

  test('renders VideoMetadata with viewCount', () => {
    const wrapper = shallow(<VideoMetadata viewCount={25} />)
    expect(wrapper).toMatchSnapshot();
  });
});
