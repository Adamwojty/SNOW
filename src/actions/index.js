export const addItem = (itemType, itemContent) => {
  const getId = () => `${Math.random().toString(36).substr(2, 9)}`;
  return {
    type: 'ADD_ITEM',
    payload: {
      itemType,
      id: getId(),
      itemContent,
    },
  };
};
export const removeItem = (id) => {
  return {
    type: 'REMOVE_ITEM',
    payload: {
      id,
    },
  };
};

export const getShopCollection = (collection) => {
  return {
    type: 'GET_COLLECTION',
    payload: collection,
  };
};
export const visitedShop = (visitShop) => {
  return {
    type: 'VISITED_SHOP',
    payload: visitShop,
  };
};
