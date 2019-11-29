import React from 'react';
import { shallow } from 'enzyme';
import { VideoGrid } from '../VideoGrid';

describe('VideoGrid', () => {
  test('renders VideoGrid without props', () => {
    const wrapper = shallow(
      <VideoGrid />
    )
    expect(wrapper).toMatchSnapshot();
  });

  test('renders VideoGrid with title prop', () => {
    const wrapper = shallow(
      <VideoGrid title="testing" />
    )
    expect(wrapper).toMatchSnapshot();
  });

  test('renders VideoGrid without divider', () => {
    const wrapper = shallow(
      <VideoGrid hideDivider={true} />
    )
    expect(wrapper).toMatchSnapshot();
  });

});