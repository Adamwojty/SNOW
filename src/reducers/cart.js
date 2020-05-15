const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        {
          title: action.payload.itemType,
          content: action.payload.itemContent,
          id: action.payload.id,
        },
      ];
    case 'REMOVE_ITEM':
      return [...state.filter((item) => item.id !== action.payload.id)];
    default:
      return state;
  }
};
export default cartReducer;
