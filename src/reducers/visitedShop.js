const visitedShopReducer = (state = false, action) => {
  switch (action.type) {
    case 'VISITED_SHOP':
      return !state;
    default:
      return state;
  }
};
export default visitedShopReducer;
