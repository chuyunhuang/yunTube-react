import React from 'react';
import './Watch.scss';
import { Video } from '../../Components/Video/Video';
import { RelatedVideos } from '../../Components/RelatedVideos/RelatedVideos';
import { VideoMetadata } from '../../Components/VideoMetadata/VideoMetadata';
import { VideoInfoBox } from '../../Components/VideoInfoBox/VideoInfoBox';

export class Watch extends React.Component {
  render() {
    return (
      <div className="watch-grid">
        <Video className="video" id="-7fuHEEmEjs" />
        <VideoMetadata className="video-metadata" viewCount={1000} />
        <VideoInfoBox className="video-info-box" />
        <div className="comments" style={{ width: '100%', height: '100px', background: 'green' }}>Comments</div>
        <RelatedVideos className="relatedVideos" />
      </div>
    )
  }
}