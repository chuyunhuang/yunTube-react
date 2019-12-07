import React from 'react';
import { shallow } from 'enzyme';
import { CommentHeader } from '../CommentHeader';

describe('CommentHeader', () => {
  test('renders CommentHeader with props.amountComment= null', () => {
    const wrapper = shallow(<CommentHeader />)
    expect(wrapper).toMatchSnapshot();
  });
  test('renders CommentHeader with props.amountComments= 123', () => {
    const wrapper = shallow(<CommentHeader amountComments={123} />)
    expect(wrapper).toMatchSnapshot();
  });
})