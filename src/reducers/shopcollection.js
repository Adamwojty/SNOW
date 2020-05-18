const shopCollectionReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_COLLECTION':
      return [...action.payload];
    default:
      return state;
  }
};
export default shopCollectionReducer;
