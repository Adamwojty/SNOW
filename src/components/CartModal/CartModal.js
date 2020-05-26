import React from 'react';
import { useSelector } from 'react-redux';
import styles from './CartModal.module.scss';
import Cart from '../../img/cart.svg';

const CartModal = () => {
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);

  return (
    <>
      {cartItems.length > 0 && (
        <div className={styles.Wrapper}>
          <button type="button">
            <img src={Cart} alt="cart" />
            <p>{cartItems.length}</p>
          </button>
        </div>
      )}
    </>
  );
};
export default CartModal;
