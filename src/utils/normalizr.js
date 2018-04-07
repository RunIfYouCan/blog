import { schema } from 'normalizr';

function convertAuthor(entity) {
  const { author: _id, authorName, ...rest } = entity;
  return {
    author: {
      _id,
      name: authorName,
    },
    ...rest,
  };
}

const author = new schema.Entity('authors', {}, { idAttribute: '_id' });

const repliesComment = new schema.Entity('comments', { author }, {
  idAttribute: '_id',
  processStrategy: convertAuthor,
});

export const commentSchema = new schema.Entity('comments', { author, replies: [repliesComment] }, {
  idAttribute: '_id',
  processStrategy: convertAuthor,
});

export const articleSchema = new schema.Entity('articles', {
  comments: [commentSchema],
  author,
}, { idAttribute: '_id', processStrategy: convertAuthor });

