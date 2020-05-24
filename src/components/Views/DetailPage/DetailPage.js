import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DetailedItem from '../../DetailedItem/DetailedItem';
import styles from './DetailPage.module.scss';

const DetailPage = ({ match }) => {
  const [item, setItem] = useState();
  const collection = useSelector((state) => state.collection);
  useEffect(() => {
    // setID(match.params.id);
    setItem(...collection.filter((shopItem) => shopItem.id === match.params.id));
  }, [collection]);

  return (
    <div className={styles.wrapper}>
      <Link className={styles.returnButton} to="/shop">
        GO BACK
      </Link>
      <DetailedItem {...item} />
    </div>
  );
};
export default DetailPage;
