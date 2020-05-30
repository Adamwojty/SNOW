import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import FormItem from '../../Form/FormItem';
import styles from './CheckoutView.module.scss';

const CheckoutView = () => {
  const [cartPrice, setCartPrice] = useState(0);
  const cart = useSelector((state) => state.cart);

  const handleCartPrice = () => {
    const cartValue = [];
    cart.map((item) => cartValue.push(item.price));
    setCartPrice(cartValue.reduce((a, b) => a + b, 0));
  };

  useEffect(() => {
    handleCartPrice();
  });

  if (cart.length < 1) {
    return <Redirect to="/" />;
  }
  return (
    <div className={styles.Wrapper}>
      <ul className={styles.cartWrapper}>
        {cart.map((item) => (
          <li key={item.id}>
            <p>{item.title}</p>
            <p>{item.price}$</p>
          </li>
        ))}
      </ul>
      <FormItem cartPrice={cartPrice} />
    </div>
  );
};
export default CheckoutView;
