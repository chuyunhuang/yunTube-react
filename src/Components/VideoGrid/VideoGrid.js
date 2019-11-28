import React from 'react';
import './VideoGrid.scss';
import { VideoPreview } from '../VideoPreview/VideoPreview';
import { Divider } from 'semantic-ui-react';

export function VideoGrid(props) {
  return (
    <React.Fragment>
      <h4>Trending</h4>
      <div className="video-grid">
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
      </div>
      {Divider}
    </React.Fragment>
  )
}
