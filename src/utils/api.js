import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://api.blog.testing.singree.com',
});
