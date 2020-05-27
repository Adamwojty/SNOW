/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './DetailedItem.module.scss';
import { addItem } from '../../actions';

// const sizes = ['162', '182', '198'];

const DetailedItem = ({ title, price, image, sizes }) => {
  const [length, setLength] = useState();
  const dispatch = useDispatch();
  // useDispatch(addItem(title));
  const handleItemToCart = (titleOfItem, priceOfItem, imageOfItem, lengthOfItem) => {
    if (!length) {
      console.log('select size first');
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
  id: PropTypes.string,
  sizes: PropTypes.arrayOf(PropTypes.number),
};
DetailedItem.defaultProps = {
  title: 'Cream skis',
  price: 299,
  image: '',
  id: '',
  sizes: [],
};
export default DetailedItem;
