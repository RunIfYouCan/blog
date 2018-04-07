import React from 'react';
import Comments from '../comments';
import './style.scss';

export default ({ author, comment }) => (
  <div key={comment._id} className="Comment">
    <div className="Comment__body">
      <div className="Comment__author">
        {author.name}
      </div>
      <div className="Comment__text">
        {comment.text}
      </div>
      <div className="Comment__date">
        {comment.created}
      </div>
    </div>
    {comment.replies &&
    <div className="Comment__replies">
      <Comments commentsId={comment.replies} />
    </div>}
  </div>
);
