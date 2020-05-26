import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DetailedItem from '../../DetailedItem/DetailedItem';
import styles from './DetailPage.module.scss';

const DetailPage = ({ match }) => {
  const [item, setItem] = useState();
  const collection = useSelector((state) => state.collection);
  const shopVisited = useSelector((state) => state.visitedShop);

  const handleItem = () => {
    setItem(...collection.filter((shopItem) => shopItem.id === match.params.id));
  };
  useEffect(() => {
    handleItem();
  }, [collection]);

  if (!shopVisited) {
    return <Redirect to="/shop" />;
  }
  return (
    <div className={styles.wrapper}>
      <Link className={styles.returnButton} to="/shop">
        GO BACK
      </Link>
      <DetailedItem {...item} />
    </div>
  );
};
DetailPage.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default DetailPage;
