import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem } from '../../config/redux/actions';
import styles from './CartSidePanel.module.scss';
import {
  handelCartSidePanelOpenAnimation,
  handelCartSidePanelClosenAnimation,
} from '../../animations';

const CartSidePanel = ({ cartState, cartItems }) => {
  let Wrapper1 = useRef(null);
  const [cartPrice, setCartPrice] = useState(0);
  const dispatch = useDispatch();

  const handleMenuAnimations = () => {
    if (cartItems.length < 1) {
      handelCartSidePanelClosenAnimation(Wrapper1);
    } else if (cartState.clicked === false) {
      handelCartSidePanelClosenAnimation(Wrapper1);
    } else if (cartState.clicked === true || cartState.initial === null) {
      handelCartSidePanelOpenAnimation(Wrapper1);
    }
  };
  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };
  const handleCartPrice = () => {
    const cartValue = [];
    cartItems.map((item) => cartValue.push(item.price));
    setCartPrice(cartValue.reduce((a, b) => a + b, 0));
  };

  useEffect(() => {
    handleMenuAnimations();
    handleCartPrice();
  });
  return (
    <>
      <div className={styles.Wrapper} ref={(el) => (Wrapper1 = el)}>
        <h2>Your Cart:</h2>
        <p>Cart total: {cartPrice} $</p>
        <Link to="/checkout">
          <button
            className={styles.buy_button}
            type="button"
            onClick={() => handelCartSidePanelClosenAnimation(Wrapper1)}
          >
            Buy now
          </button>
        </Link>
        <div className={styles.itemsContainer}>
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
        </div>
      </div>
    </>
  );
};
CartSidePanel.propTypes = {
  cartState: PropTypes.objectOf(PropTypes.any).isRequired,
  cartItems: PropTypes.arrayOf(PropTypes.any).isRequired,
};
export default CartSidePanel;
