import React from 'react';
import { shallow } from 'enzyme';
import { AppLayout } from '../AppLayout';

describe('AppLayout', () => {
  test('renders <AppLayout /> ', () => {
    const wrapper = shallow(
      <AppLayout />
    )
    expect(wrapper).toMatchSnapshot();
  });

  test('renders <AppLayout /> with one child', () => {
    const wrapper = shallow(
      <AppLayout >
        <div>Child 1</div>
      </AppLayout >
    )
    expect(wrapper).toMatchSnapshot();
  });

  test('renders <AppLayout /> with more than one children', () => {
    const wrapper = shallow(
      <AppLayout>
        <div>Child 1</div>
        <div>
          <span>Child 2</span>
          <div>Child 3</div>
        </div>
      </AppLayout>
    )
    expect(wrapper).toMatchSnapshot();
  });
});