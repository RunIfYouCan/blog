import React from 'react';
import { connect } from 'react-redux';
import Comment from '../comment';

const Comments = ({ commentsId, comments, authors }) => (
  <div className="Comments">
    {commentsId.map(id => (
      <Comment key={id} comment={comments[id]} author={authors[comments[id].author]} />
    ))}
  </div>
);

const mapStateToProps = ({ articles }) => ({
  comments: articles.comments,
  authors: articles.authors,
});

export default connect(mapStateToProps)(Comments);
