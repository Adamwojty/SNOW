import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './ShopView.module.scss';
import { visitedShop } from '../../../actions';
// import { useFillerItems } from '../../../hooks/useFillerItems';
import { useStoreFireBase } from '../../../hooks/useStoreFirebase';

const ShopView = () => {
  const shopWrapper = useRef(null);
  const imgWrapper = useRef(null);
  const [collection, setCollection] = useState('skis');
  const visitShop = useSelector((state) => state.visitedShop);
  const dispatch = useDispatch();
  const items = useStoreFireBase(collection);
  // const imgWidth = imgWrapper.current?.offsetWidth;
  // const fillerItems = useFillerItems(shopWrapper, imgWrapper, items);

  const handleIfShopIsVisited = (item) => {
    dispatch(visitedShop(item));
  };
  useEffect(() => {
    handleIfShopIsVisited(visitShop);
  }, []);
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
      <div className={styles.shop_wrapper} ref={shopWrapper}>
        {items.map((item) => (
          <div className={styles.wrapper} key={item.title} ref={imgWrapper}>
            <img src={item.image} alt="3" />
            <div className={styles.description_wrapper}>
              <h2>{item.title}</h2>
              <p>Price: {item.price}$</p>
              <Link className={styles.redirect_button} to={{ pathname: `/shop/${item.id}` }}>
                {/* {fillerItems &&
                  fillerItems.map((filleritem) => (
                    <div style={{ width: `${imgWidth}px`, height: '1px' }} key={filleritem} />
                  ))} */}
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
