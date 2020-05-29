const visitedMainPageReducer = (state = false, action) => {
  switch (action.type) {
    case 'VISITED_HOMEPAGE':
      return !state;
    default:
      return state;
  }
};
export default visitedMainPageReducer;
