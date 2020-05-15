import React from 'react';
import styles from './HomeView.module.scss';
import Imag from '../../../img/img1.jpg';

const HomeView = () => {
  return (
    <main className={styles.wrapper}>
      <section className={styles.slogan_wrapper}>
        <header>White powder specialists.</header>
        <p>
          When you buy our skis, you buy quality with a performance guarantee. Our skis are fit for
          purpose and built to last.
        </p>
      </section>
      <div className={styles.img1}>
        <img src={Imag} alt="skier" />
      </div>
      <div className={styles.img2}>
        <img src={Imag} alt="skier" />
      </div>
      <div className={styles.img3}>
        <img src={Imag} alt="skier" />
      </div>
    </main>
  );
};
export default HomeView;
