const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        {
          title: action.payload.itemType,
          price: action.payload.price,
          id: action.payload.id,
          image: action.payload.image,
          size: action.payload.size,
        },
      ];
    case 'REMOVE_ITEM':
      return [...state.filter((item) => item.id !== action.payload.id)];
    case 'CLEAR_CART':
      return [];

    default:
      return state;
  }
};
export default cartReducer;
