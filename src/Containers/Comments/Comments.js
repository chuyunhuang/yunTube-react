import React from 'react';
import { CommentHeader } from './CommentHeader/CommentHeader';
import { AddComment } from './AddComment/AddComment';
import { SingleComment } from './SingleComment/SingleComment';
import './Comments.scss';

export class Comments extends React.Component {
  render() {
    return (
      <div>
        <CommentHeader amountComments={this.props.amountComments} />
        <AddComment />
        <SingleComment />
        <SingleComment />
        <SingleComment />
      </div>
    )
  }
}