import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomeView.module.scss';
import img1 from '../../../img/img1.jpg';
import img2 from '../../../img/img2.jpg';
import img3 from '../../../img/img3.jpg';
import img4 from '../../../img/shop_landning.jpg';
import Footer from '../../Footer/Footer';

const HomeView = () => {
  return (
    <div className={styles.page_wrapper}>
      <main className={styles.wrapper}>
        <section className={styles.slogan_wrapper}>
          <header>White powder specialists.</header>
          <p>
            When you buy our skis, you buy quality with a performance guarantee. Our skis are fit
            for purpose and built to last.
          </p>
        </section>
        <div className={styles.img1}>
          <img src={img1} alt="skier" />
        </div>
        <div className={styles.img2}>
          <img src={img2} alt="skier" />
        </div>
        <div className={styles.img3}>
          <div />
          <img src={img3} alt="skier" />
        </div>
        <div className={styles.shop_info}>
          <h2>SPRING SALE.</h2>
          <p>UP TO 30% OFF YOUR FAVOURITE MODELS.</p>
          <Link to="/shop">
            <button type="button">SHOP NOW</button>
          </Link>
        </div>
        <div className={styles.img4}>
          <img src={img4} alt="mountains" />
        </div>
      </main>
    </div>
  );
};
export default HomeView;
