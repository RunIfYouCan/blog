const initialState = {};

export default function reducer(state = initialState, action) {
  const { type, payload } = action; //eslint-disable-line
  switch (type) {
    default:
      return state;
  }
}
