import * as actionTypes from './consts';

const initialState = {};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.ARTICLES_LOADED:
      const { articles, ...meta } = payload;
      return {
        list: articles,
        meta,
      };
    case actionTypes.ARTICLE_LOADED:
      return payload;
    case actionTypes.COMMENT_POSTED:
      const { result: postedComment, entities } = payload;
      return {
        article: { ...state.article, comments: [...state.article.comments, postedComment] },
        comments: { ...state.comments, ...entities.comments },
        authors: { ...state.authors, ...entities.authors },
      };
    default:
      return state;
  }
}
