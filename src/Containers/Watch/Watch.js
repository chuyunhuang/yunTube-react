import React from 'react';
import './Watch.scss';
// import { Video } from '../../Components/Video/Video';
import { VideoPreview } from '../../Components/VideoPreview/VideoPreview';

export class Watch extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* <div style={{ maxWidth: '80%' }}>
        <Video id='-7fuHEEmEjs' />
      </div> */}
        <VideoPreview horizontal={true} />
        <VideoPreview />
      </React.Fragment>
    )
  }
}