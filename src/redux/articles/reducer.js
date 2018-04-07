import * as actionTypes from './consts';

const initialState = {};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.ARTICLES_LOADED:
      const { articles, ...meta } = payload;
      return {
        ...state,
        list: articles,
        meta,
      };
    case actionTypes.ARTICLE_LOADED:
      return {
        ...state,
        ...payload,
      };
    case actionTypes.COMMENT_POSTED:
      const { result: postedComment, entities } = payload;
      return {
        ...state,
        article: { ...state.article, comments: [...state.article.comments, postedComment] },
        comments: { ...state.comments, ...entities.comments },
        authors: { ...state.authors, ...entities.authors },
      };
    case actionTypes.POST_EDITED:
      return {
        ...state,
        article: { ...state.article, ...payload },
      };
    case actionTypes.POST_ADDED:
      return {
        ...state,
        list: [payload, ...state.list],
      };
    default:
      return state;
  }
}
