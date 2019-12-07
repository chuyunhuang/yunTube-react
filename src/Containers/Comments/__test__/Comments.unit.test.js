import React from 'react';
import { shallow } from 'enzyme';
import { Comments } from '../Comments';

describe('Comments', () => {
  test('renders Comments w/o props', () => {
    const wrapper = shallow(<Comments />)
    expect(wrapper).toMatchSnapshot();
  });

  test('renders Comments with props.amountComments={123}', () => {
    const wrapper = shallow(<Comments amountComments={123} />)
    expect(wrapper).toMatchSnapshot();
  })

})
