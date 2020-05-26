/* eslint-disable no-return-assign */
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import PropTypes from 'prop-types';
import styles from './CartSidePanel.module.scss';
import img from '../../img/guy.jpg';

const CartSidePanel = ({ cartState }) => {
  let Wrapper1 = useRef(null);

  const handelCartSidePanelOpenAnimation = (node1) => {
    gsap.to(node1, {
      duration: 1,
      x: 0,
      opacity: 1,
    });
  };
  const handelCartSidePanelClosenAnimation = (node1) => {
    gsap.to(node1, {
      duration: 1,
      x: 1000,
      opacity: 1,
    });
  };
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

  useEffect(() => {
    handleMenuAnimations();
  });
  return (
    <>
      <div className={styles.Wrapper} ref={(el) => (Wrapper1 = el)}>
        <h2>Your Cart:</h2>
        <p>Cart total: 999 $</p>
        <div className={styles.itemContainer}>
          <img src={img} alt="" />
          <div className={styles.itemDescription}>
            <h3>Red Skis</h3>
            <h4>299$</h4>
            <p>Size: 162</p>
            <button type="button">X</button>
          </div>
        </div>
        <button className={styles.buy_button} type="button">
          Buy now
        </button>
      </div>
    </>
  );
};
CartSidePanel.propTypes = {
  cartState: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default CartSidePanel;
