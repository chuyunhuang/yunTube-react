import React from 'react';
import { CommentHeader } from './CommentHeader/CommentHeader';
import { SingleComment } from './SingleComment/SingleComment';
import './Comments.scss';

export class Comments extends React.Component {
  render() {
    return (
      <div>
        <CommentHeader />
        <SingleComment />
        <SingleComment />
        <SingleComment />

      </div>
    )
  }
}