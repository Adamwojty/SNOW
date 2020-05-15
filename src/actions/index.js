export const addItem = (itemType, itemContent, id) => {
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
