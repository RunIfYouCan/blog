export const getParameterByName = (url = window.location.href, name) => { // eslint-disable-line
  const paramName = name.replace(/[[\]]/g, '\\$&');
  const regex = new RegExp(`[?&]${paramName}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};
