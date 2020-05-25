import React, { useState, useRef } from 'react';
import styles from './DetailedItem.module.scss';

const sizes = ['162', '182', '198'];

const DetailedItem = ({ title, price, image }) => {
  // const radio = useRef(null);
  // const [size, setSize] = useState('');

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
            {sizes.map((item) => (
              <>
                <input type="radio" id={`${item}`} name="selector" key={item} />
                <label htmlFor={`${item}`}>{item}</label>
              </>
            ))}
            <button type="submit">ADD TO CART</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default DetailedItem;
