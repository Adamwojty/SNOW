import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './NewsDetailedView.module.scss';

const NewsDetailedView = ({ match }) => {
  const [item, setItem] = useState();
  const collection = useSelector((state) => state.collection);
  const handleItem = () => {
    setItem(...collection.filter((shopItem) => shopItem.id === match.params.id));
  };
  useEffect(() => {
    handleItem();
  }, [collection]);

  return (
    <div className={styles.Wrapper}>
      {item && (
        <>
          <img src={item.image} alt="" />
          <h2>{item.title}</h2>
          <h3>{item.author}</h3>
          {item && item.description.map((paragraph) => <p>{paragraph}</p>)}
        </>
      )}
      <Link to="/news">
        <button type="button">GO BACK</button>
      </Link>
    </div>
  );
};

NewsDetailedView.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default NewsDetailedView;
