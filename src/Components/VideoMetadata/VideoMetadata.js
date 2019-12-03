import React from 'react';
import { Divider } from 'semantic-ui-react';
import './VideoMetadata.scss';

export function VideoMetadata(props) {
  return (
    <div className="video-metadata">
      <h3>Video Title</h3>
      <div className="video-stats">
        <span>views</span>
      </div>
      <div>Sth</div>
      <Divider />
    </div>
  )
}