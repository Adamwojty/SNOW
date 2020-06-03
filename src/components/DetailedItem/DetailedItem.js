/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './DetailedItem.module.scss';
import { addItem } from '../../actions';

const DetailedItem = ({ title, price, image, sizes }) => {
  const [length, setLength] = useState();
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const handleItemToCart = (titleOfItem, priceOfItem, imageOfItem, lengthOfItem) => {
    if (!length) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    } else {
      dispatch(addItem(titleOfItem, priceOfItem, imageOfItem, lengthOfItem));
    }
  };

  return (
    <div className={styles.item_wrapper}>
      <div className={styles.image_wrapper}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.itemDescription}>
        <h2>{title}</h2>
        <p>Price: {price} $</p>
        <div className={styles.sizeSelection_wrapper}>
          <form>
            {sizes &&
              sizes.map((size) => (
                <span key={size}>
                  <input type="radio" id={`${size}`} name="selector" value={size} />
                  <label htmlFor={`${size}`} onClick={() => setLength(size)}>
                    {size}
                  </label>
                </span>
              ))}
            <button type="button" onClick={() => handleItemToCart(title, price, image, length)}>
              ADD TO CART
            </button>
            {error && <div className={styles.error}>SELECT SIZE FIRST</div>}
          </form>
        </div>
      </div>
    </div>
  );
};
DetailedItem.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  sizes: PropTypes.arrayOf(PropTypes.any),
};
DetailedItem.defaultProps = {
  title: 'Cream skis',
  price: 299,
  image: '',
  sizes: [],
};
export default DetailedItem;
