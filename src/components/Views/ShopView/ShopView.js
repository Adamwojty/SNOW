import React, { useState, useEffect } from 'react';
import firestore from '../../../firebase';
import styles from './ShopView.module.scss';
import img1 from '../../../img/guy.jpg';

const ShopView = () => {
  // const [items, setItems] = useState([]);
  // const itemsCollectios = firestore.collection('collection');
  // const itemsCollection = (doc) => {
  //   return { id: doc.id, ...doc.data() };
  // };
  // useEffect(() => {
  //   const subscribe = itemsCollectios.onSnapshot((snapshot) => {
  //     const dataFromCollection = snapshot.docs.map(itemsCollection);
  //     setItems(dataFromCollection);
  //   });
  //   return () => subscribe;
  // });

  return (
    <div className={styles.page_wrapper}>
      <div className={styles.shop_wrapper}>
        <div className={styles.wrapper}>
          <img src={img1} alt="3" />
          <div className={styles.description_wrapper}>
            <h2>RED SKIS</h2>
            <p>Price: 299$</p>
            <button type="button">ADD TO Cart</button>
          </div>
        </div>
        <div className={styles.wrapper}>
          <img src={img1} alt="3" />
          <div className={styles.description_wrapper}>
            <h2>RED SKIS</h2>
            <p>Price: 299$</p>
            <button type="button">ADD TO Cart</button>
          </div>
        </div>
        <div className={styles.wrapper}>
          <img src={img1} alt="3" />
          <div className={styles.description_wrapper}>
            <h2>RED SKIS</h2>
            <p>Price: 299$</p>
            <button type="button">ADD TO Cart</button>
          </div>
        </div>
        <div className={styles.wrapper}>
          <img src={img1} alt="3" />
          <div className={styles.description_wrapper}>
            <h2>RED SKIS</h2>
            <p>Price: 299$</p>
            <button type="button">ADD TO Cart</button>
          </div>
        </div>
        <div className={styles.wrapper}>
          <img src={img1} alt="3" />
          <div className={styles.description_wrapper}>
            <h2>RED SKIS</h2>
            <p>Price: 299$</p>
            <button type="button">ADD TO Cart</button>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.description_wrapper}>
            <img src={img1} alt="3" />
            <h2>RED SKIS</h2>
            <p>Price: 299$</p>
            <button type="button">ADD TO Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShopView;
