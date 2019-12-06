import React from 'react';
import './SingleComment.scss';
import { Button, Image } from 'semantic-ui-react';
import { Rating } from '../../../Components/Rating/Rating';

export function SingleComment(props) {
  return (
    <div className='single-comment'>
      <Image className="user-image" src='http://via.placeholder.com/48x48' circular />
      <div>
        <div className="user-name">User Name</div>
        <span>Comment texts</span>
        <div className="comment-actions">
          <Rating ikeCount={1} /><Button size='mini' compact>Reply</Button>
        </div>
      </div>
    </div>
  )
}