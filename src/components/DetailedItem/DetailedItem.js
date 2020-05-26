import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from './DetailedItem.module.scss';
import { addItem } from '../../actions';

const sizes = ['162', '182', '198'];

const DetailedItem = ({ title, price, image, redirect }) => {
  const [length, setLength] = useState();
  const [item, setItem] = useState({});
  useDispatch(addItem(title));
  const handleItemToCart = () => {
    if (!length) {
      console.log('select size first');
    } else return setItem([title, price, image, length]);
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
            {sizes.map((size) => (
              <span key={size}>
                <input type="radio" id={`${size}`} name="selector" value={size} />
                <label htmlFor={`${size}`} onClick={() => setLength(size)}>
                  {size}
                </label>
              </span>
            ))}
            <button
              type="button"
              onClick={() => handleItemToCart({ title }, { price }, { image }, length)}
            >
              ADD TO CART
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default DetailedItem;
