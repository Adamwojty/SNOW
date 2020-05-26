export const addItem = (itemType, price, image, size, id) => {
  return {
    type: 'ADD_ITEM',
    payload: {
      itemType,
      id,
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
