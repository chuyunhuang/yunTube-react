import React from 'react';
import './SubscriptionGroup.scss'
import { Subscription } from './Subscription';
import { Divider } from 'semantic-ui-react';
import { SideBarHeader } from '../SideBarHeader/SideBarHeader';

export class SubscriptionGroup extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SideBarHeader title="Subscriptions" />
        <Subscription label="Music Channel" broadcasting />
        <Subscription label="Travel Channel" amountNewVideos={10} />
        <Subscription label="Ted x Talks" amountNewVideos={10} />
        <Divider />

      </React.Fragment>
    )
  }
}
