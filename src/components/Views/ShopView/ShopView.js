import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import firestore from '../../../firebase';
import styles from './ShopView.module.scss';
import { addItem, getShopCollection } from '../../../actions';

const ShopView = () => {
  const [collection, setCollection] = useState('skis');
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const skisCollections = firestore.collection(collection);
    const documentsCollection = (doc) => {
      return { id: doc.id, ...doc.data() };
    };
    const subscribe = skisCollections.onSnapshot((snapshot) => {
      const dataFromCollection = snapshot.docs.map(documentsCollection);
      setItems(dataFromCollection);
      dispatch(getShopCollection(dataFromCollection));
    });
    return () => subscribe;
  }, [collection]);

  return (
    <div className={styles.page_wrapper}>
      <div className={styles.category_wrapper}>
        <button type="button" onClick={() => setCollection('skis')}>
          SKIS
        </button>
        <button type="button" onClick={() => setCollection('skiPoles')}>
          SKI POLES
        </button>
        <button type="button" onClick={() => setCollection('googles')}>
          GOOGLES
        </button>
      </div>
      <div className={styles.shop_wrapper}>
        {items.map((item) => (
          <div className={styles.wrapper} key={item.title}>
            <img src={item.image} alt="3" />
            <div className={styles.description_wrapper}>
              <h2>{item.title}</h2>
              <p>Price: {item.price}$</p>
              <Link
                className={styles.redirect_button}
                to={`/shop/${item.id}`}
                onClick={() => {
                  dispatch(addItem(item));
                }}
              >
                See more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ShopView;
