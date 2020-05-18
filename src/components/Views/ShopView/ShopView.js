import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import firestore from '../../../firebase';
import styles from './ShopView.module.scss';
import { addItem, getShopCollection } from '../../../actions';

const ShopView = () => {
  const dispatch = useDispatch();
  const [collection, setCollection] = useState([]);
  const skisCollections = firestore.collection('skis');

  useEffect(() => {
    const documentsCollection = (doc) => {
      return { id: doc.id, ...doc.data() };
    };
    const subscribe = skisCollections.onSnapshot((snapshot) => {
      const dataFromCollection = snapshot.docs.map(documentsCollection);
      setCollection(dataFromCollection);
      dispatch(getShopCollection(dataFromCollection));
    });
    return () => subscribe;
  }, []);

  return (
    <div className={styles.page_wrapper}>
      <div className={styles.shop_wrapper}>
        {collection.map((item) => (
          <div className={styles.wrapper} key={item.title}>
            <img src={item.image} alt="3" />
            <div className={styles.description_wrapper}>
              <h2>{item.title}</h2>
              <p>Price: {item.price}$</p>
              <button
                type="button"
                onClick={() => {
                  dispatch(addItem(item));
                }}
              >
                Add TO Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ShopView;
