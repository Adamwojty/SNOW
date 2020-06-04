import React from 'react';
import PropTypes from 'prop-types';

const OrderConfirmation = ({ userInfo, cartPrice }) => (
  <div>
    <h2>Thanks for your order, {userInfo.firstName}</h2>
    <p>
      We have sent confirmation and payment information to your adress:
      <strong>{userInfo.email}</strong>
    </p>
    <p>
      Your delivery adress is:{' '}
      <strong>
        {userInfo.adress1}, {userInfo.adress2}, {userInfo.adress3}
      </strong>
    </p>
    <p>
      Your cart total was: <strong>{cartPrice}$</strong>
    </p>
    <p>You will be directed shortly...</p>
  </div>
);
OrderConfirmation.propTypes = {
  userInfo: PropTypes.objectOf(PropTypes.string).isRequired,
  cartPrice: PropTypes.number.isRequired,
};
export default OrderConfirmation;
