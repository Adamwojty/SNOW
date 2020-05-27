/* eslint-disable no-return-assign */
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../actions';
import styles from './CartSidePanel.module.scss';
import {
  handelCartSidePanelOpenAnimation,
  handelCartSidePanelClosenAnimation,
} from '../../animations';

const CartSidePanel = ({ cartState, cartItems }) => {
  let Wrapper1 = useRef(null);
  const dispatch = useDispatch();
  const handleMenuAnimations = () => {
    if (cartState.clicked === false) {
      handelCartSidePanelClosenAnimation(Wrapper1);
    } else if (
      cartState.clicked === true ||
      (cartState.clicked === true && cartState.initial === null)
    ) {
      handelCartSidePanelOpenAnimation(Wrapper1);
    }
  };
  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  useEffect(() => {
    handleMenuAnimations();
  });
  return (
    <>
      <div className={styles.Wrapper} ref={(el) => (Wrapper1 = el)}>
        <h2>Your Cart:</h2>
        <p>Cart total: 999 $</p>
        {cartItems &&
          cartItems.map((item) => (
            <div className={styles.itemContainer} key={item.id}>
              <img src={item.image} alt="" />
              <div className={styles.itemDescription}>
                <h3>{item.title}</h3>
                <h4>{item.price}$</h4>
                <p>Size: {item.size}</p>
                <button type="button" onClick={() => handleRemoveItem(item.id)}>
                  X
                </button>
              </div>
            </div>
          ))}

        <button className={styles.buy_button} type="button">
          Buy now
        </button>
      </div>
    </>
  );
};
CartSidePanel.propTypes = {
  cartState: PropTypes.objectOf(PropTypes.any).isRequired,
  cartItems: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default CartSidePanel;
