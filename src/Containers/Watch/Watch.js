import React from 'react';
import './Watch.scss';
// import { Video } from '../../Components/Video/Video';
// import { VideoPreview } from '../../Components/VideoPreview/VideoPreview';
import { RelatedVideos } from '../../Components/RelatedVideos/RelatedVideos';

export class Watch extends React.Component {
  render() {
    return (
      <React.Fragment>
        <RelatedVideos />
      </React.Fragment>
    )
  }
}