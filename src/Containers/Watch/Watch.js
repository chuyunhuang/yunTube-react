import React from 'react';
import './Watch.scss';
import { Video } from '../../Components/Video/Video';
import { RelatedVideos } from '../../Components/RelatedVideos/RelatedVideos';
import { VideoMetadata } from '../../Components/VideoMetadata/VideoMetadata';
import { VideoInfoBox } from '../../Components/VideoInfoBox/VideoInfoBox';
import { Comments } from '../Comments/Comments';

export class Watch extends React.Component {
  render() {
    return (
      <div className="watch-grid">
        <Video className="video" id="-7fuHEEmEjs" />
        <VideoMetadata className="video-metadata" viewCount={1000} />
        <VideoInfoBox className="video-info-box" />
        <Comments className="comments-box" />
        <RelatedVideos className="related-videos" />
      </div>
    )
  }
}