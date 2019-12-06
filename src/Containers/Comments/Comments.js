import React from 'react';
import { CommentHeader } from './CommentHeader/CommentHeader';
import './Comments.scss';

export class Comments extends React.Component {
  render() {
    return (
      <div>
        <CommentHeader />
      </div>
    )
  }
}