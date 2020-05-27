export const addItem = (itemType, price, image, size) => {
  const getId = () => `_${Math.random().toString(36).substr(2, 9)}`;
  return {
    type: 'ADD_ITEM',
    payload: {
      itemType,
      id: getId(),
      price,
      image,
      size,
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
