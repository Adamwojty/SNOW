import React from 'react';
import styles from './DetailedItem.module.scss';

const sizes = ['162', '182', '198'];

const DetailedItem = ({ title, price, image }) => {
  return (
    <div className={styles.item_wrapper}>
      <div className={styles.image_wrapper}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.itemDescription}>
        <h2>{title}</h2>
        <p>Price: {price} $</p>
        <div className={styles.sizeSelection_wrapper}>
          {sizes.map((size) => (
            <>
              <input type="radio" id={`${size}`} name="selector" />
              <label htmlFor={`${size}`}>{size}</label>
            </>
          ))}
        </div>
        <button type="button"> ADD TO CART</button>
      </div>
    </div>
  );
};
export default DetailedItem;
