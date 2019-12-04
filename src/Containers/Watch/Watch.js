import React from 'react';
import './Watch.scss';
import { Video } from '../../Components/Video/Video';
import { RelatedVideos } from '../../Components/RelatedVideos/RelatedVideos';
import { VideoMetadata } from '../../Components/VideoMetadata/VideoMetadata';

export class Watch extends React.Component {
  render() {
    return (
      <div className="watch-grid">
        <Video className="video" id="-7fuHEEmEjs" />
        <VideoMetadata className="video-metadata" viewCount={1000} />
        <div className="video-info-box" style={{ width: '100%', height: '100px', background: 'orange' }}>Info</div>
        <div className="comments" style={{ width: '100%', height: '100px', background: 'green' }}>Comments</div>
        <RelatedVideos className="relatedVideos" />
      </div>
    )
  }
}