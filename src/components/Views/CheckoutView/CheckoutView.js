import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import FormItem from '../../Form/FormItem';
import styles from './CheckoutView.module.scss';
import OrderConfirmation from '../../OrderConfirmation/OrderConfirmation';

const CheckoutView = () => {
  const [cartPrice, setCartPrice] = useState(0);
  const [userInfo, setUserInfo] = useState([]);
  const cart = useSelector((state) => state.cart);

  const handleCartPrice = () => {
    const cartValue = [];
    cart.map((item) => cartValue.push(item.price));
    setCartPrice(cartValue.reduce((a, b) => a + b, 0));
  };
  const handleUserInfo = (values) => {
    setUserInfo([
      {
        email: values.email,
        firstName: values.firstName,
        lastName: values.lastName,
        adress1: values.adress1,
        adress2: values.adress2,
        adress3: values.adress3,
      },
    ]);
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
      {userInfo.length ? (
        <OrderConfirmation cartPrice={cartPrice} userInfo={userInfo[0]} />
      ) : (
        <FormItem cartPrice={cartPrice} handleUserInfo={handleUserInfo} />
      )}
    </div>
  );
};
export default CheckoutView;
