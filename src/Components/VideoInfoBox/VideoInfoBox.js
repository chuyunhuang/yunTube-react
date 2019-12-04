import React from 'react';
import './VideoInfoBox.scss';
import { Image, Button } from 'semantic-ui-react';

export class VideoInfoBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: true,
    };


  }


  render() {
    let descriptionTextClass = "collapsed";
    let buttonTitle = "Show More";
    if (!this.state.collapsed) {
      descriptionTextClass = "expand";
      buttonTitle = "Show Less"
    }
    return (
      <div className="video-info-box">
        <Image className='channel-image' src='http://via.placeholder.com/48x48' circular />
        <div className="video-info">
          <div className="channel-name">Yun is amazing</div>
          <div className="video-publish-date">Wed, Dec 4th</div>
        </div>
        <Button color="youtube" className="subscribe">1 Subscribe</Button>
        <div className="video-description">
          <div className={descriptionTextClass}>
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
          <Button compact onClick={this.onToggleCollapseButton}>{buttonTitle}</Button>
        </div>
      </div>

    )
  }

  onToggleCollapseButton = () => {
    this.setState((preState) => {
      return {
        collapsed: !preState.collapsed
      }
    })
  }
}