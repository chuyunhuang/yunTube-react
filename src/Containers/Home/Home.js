import React from 'react';
import './Home.scss';
import { VideoPreview } from '../../Components/VideoPreview/VideoPreview';

export class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <VideoPreview />
      </div>
    )
  }
}

