import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './CartModal.module.scss';
import Cart from '../../img/cart.svg';
import CartSidePanel from '../CartSidePanel/CartSidePanel';

const CartModal = () => {
  const cartItems = useSelector((state) => state.cart);
  const [cartState, setCartState] = useState({
    initial: false,
    clicked: null,
    menuName: 'Menu',
  });
  const handleCart = () => {
    if (cartState.initial === false) {
      setCartState({
        initial: null,
        clicked: true,
        menuName: 'Close',
      });
    } else if (cartState.clicked === true) {
      setCartState({
        clicked: !cartState.clicked,
        menuName: 'Menu',
      });
    } else if (cartState.clicked === false) {
      setCartState({
        clicked: !cartState.clicked,
        menuName: 'Close',
      });
    }
  };
  return (
    <>
      {/* {cartItems.length > 0 && cartItems.length && ( */}
      <div className={styles.Wrapper}>
        <button type="button" onClick={() => handleCart()}>
          <img src={Cart} alt="cart" />
          <p>{cartItems.length}</p>
        </button>
      </div>
      {/* )} */}
      <CartSidePanel cartState={cartState} cartItems={cartItems} />
    </>
  );
};
export default CartModal;
