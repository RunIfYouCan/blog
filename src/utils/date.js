export const formatDate = (dateStr) => {
  const [date] = dateStr.split(' ');

  return date.split('/').reverse().join('/');
};
