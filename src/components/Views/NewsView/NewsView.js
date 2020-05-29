import React from 'react';
import { Link } from 'react-router-dom';
import { useStoreFireBase } from '../../../hooks/useStoreFirebase';
import styles from './NewsView.module.scss';

const NewsView = () => {
  const news = useStoreFireBase('news');

  return (
    <main className={styles.Wrapper}>
      {news.map((item) => (
        <section className={styles.newsWrapper}>
          <img src={item.image} alt="" />
          <div className={styles.newsDescription}>
            <h2>{item.title}</h2>
            <h3>{item.author}</h3>
            <p>{item.shortDsc}</p>
            <Link to={{ pathname: `/news/${item.id}` }}>
              <button type="button">Read More</button>
            </Link>
          </div>
        </section>
      ))}
    </main>
  );
};
export default NewsView;
