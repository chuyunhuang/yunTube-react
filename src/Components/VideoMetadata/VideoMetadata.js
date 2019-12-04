import React from 'react';
import { Divider, Button, Icon } from 'semantic-ui-react';
import './VideoMetadata.scss';
import { Rating } from '../Rating/Rating';

export function VideoMetadata(props) {
  return (
    <div className="video-metadata">
      <h3>Video Title</h3>
      <div className="video-stats">
        <span> 1,000 views</span>
        <div className="video-action">
          <Rating likeCount={20} dislikeCount={1} />
          <Button basic icon labelposition="left" >
            <Icon name="share" />
            Share
          </Button>
          <Button basic icon>
            <Icon name="add circle" />
          </Button>
        </div>
      </div>
      <Divider />
    </div>
  )
}