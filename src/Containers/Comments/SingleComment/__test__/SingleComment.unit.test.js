import React from 'react';
import { shallow } from 'enzyme';
import { SingleComment } from '../SingleComment';

describe('SingleComment', () => {
  test('renders SingleComment', () => {
    const wrapper = shallow(<SingleComment />)
    expect(wrapper).toMatchSnapshot();
  });
});