import { normalize } from 'normalizr';
import { api } from '../../utils/api';
import { articleSchema, commentSchema } from '../../utils/normalizr';
import * as actionTypes from './consts';

export const loadArticles = params => dispatch =>
  api
    .get('/', { params: { ...params, limit: 3 } })
    .then(({ data }) => dispatch({
      type: actionTypes.ARTICLES_LOADED,
      payload: data,
    }));

export const loadArticle = id => dispatch =>
  api
    .get(id)
    .then(({ data }) => {
      const { entities, result } = normalize(data, articleSchema);
      const { articles, ...rest } = entities;
      dispatch({
        type: actionTypes.ARTICLE_LOADED,
        payload: {
          article: articles[result],
          ...rest,
        },
      });
    });

export const postComment = comment => dispatch =>
  api
    .post('/comment', comment)
    .then(({ data }) =>
      dispatch({
        type: actionTypes.COMMENT_POSTED,
        payload: normalize(data, commentSchema),
      }));

export const editPost = ({ post, id }) => dispatch =>
  api
    .put(id, post)
    .then(({ data }) => {
      const { entities, result } = normalize(data, articleSchema);
      dispatch({
        type: actionTypes.POST_EDITED,
        payload: entities.articles[result],
      });
    });

export const addPost = post => dispatch =>
  api
    .post('', post)
    .then(({ data }) => {
      dispatch({
        type: actionTypes.POST_ADDED,
        payload: data,
      });
    });
