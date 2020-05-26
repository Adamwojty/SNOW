/* eslint-disable import/prefer-default-export */
import { useEffect, useState } from 'react';

export const useFillerItems = (movieListContainer, movieItem, moviesList) => {
  const [fillerItems, setFillerItems] = useState();
  const handleLastRowFill = () => {
    if (moviesList.length > 1) {
      const containerWidth = movieListContainer.current?.offsetWidth;
      const itemWidth = movieItem.current?.offsetWidth;
      const itemsInRow = Math.floor(containerWidth / itemWidth);
      const itemsNeededInRow = itemsInRow - (moviesList.length % itemsInRow);
      const fillerItem = new Array(itemsNeededInRow).fill(undefined).map((val, idx) => idx);
      setFillerItems(fillerItem);
    } else;
  };
  useEffect(() => {
    handleLastRowFill();
    document.addEventListener('resize', () => handleLastRowFill());
    return document.removeEventListener('resize', () => handleLastRowFill());
  }, [movieListContainer.current?.offsetWidth]);
  return fillerItems;
};
