import React from 'react';
import { shallow } from 'enzyme';
import { SubscriptionGroup } from '../SubscriptionGroup';

describe('SubsciptionGroup', () => {
  test('renders an empty SubscriptionGroup', () => {
    const wrapper = shallow(
      <SubscriptionGroup />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('render broadcasting Subscription', () => {
    const wrapper = shallow(
      <SubscriptionGroup broadcasting label="Music Channel" />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('renders non-broadcasting Subscription with new videos', () => {
    const wrapper = shallow(
      <SubscriptionGroup amountNewVideos={6} label="Travel Channel" />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
