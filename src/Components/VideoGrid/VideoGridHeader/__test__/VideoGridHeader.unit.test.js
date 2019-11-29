import React from 'react';
import { shallow } from 'enzyme';
import { VideoGridHeader } from '../VideoGridHeader';

describe('VideoGridHeader', () => {
  test('renders VideoGridHeader without props', () => {
    const wrapper = shallow(
      <VideoGridHeader />
    )
    expect(wrapper).toMatchSnapshot();
  });

  test('renders VideoGridHeader with empty string header', () => {
    const wrapper = shallow(
      <VideoGridHeader title='' />
    )
    expect(wrapper).toMatchSnapshot();
  });

  test('renders VideoGridHeader with title', () => {
    const wrapper = shallow(
      <VideoGridHeader title="Testing" />
    )
    expect(wrapper).toMatchSnapshot();
  });
});