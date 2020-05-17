import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './HomeView.module.scss';
import img1 from '../../../img/img1.jpg';
import img2 from '../../../img/img2.jpg';
import img3 from '../../../img/img3.jpg';
import img4 from '../../../img/shop_landning.jpg';
import { staggerPhotoReveal, sloganReveal } from '../../../animations';

const HomeView = () => {
  let slogan = useRef(null);
  let imgOne = useRef(null);
  let imgTwo = useRef(null);
  let imgThree = useRef(null);

  useEffect(() => {
    sloganReveal(slogan);
    staggerPhotoReveal(imgTwo, imgOne, imgThree);
  });

  return (
    <div className={styles.page_wrapper}>
      <main className={styles.wrapper}>
        <section className={styles.slogan_wrapper} ref={(el) => (slogan = el)}>
          <header>White powder specialists.</header>
          <p>
            When you buy our skis, you buy quality with a performance guarantee. Our skis are fit
            for purpose and built to last.
          </p>
        </section>
        <div className={styles.img1}>
          <img src={img1} alt="skier" ref={(el) => (imgOne = el)} />
        </div>
        <div className={styles.img2}>
          <img src={img2} alt="skier" ref={(el) => (imgTwo = el)} />
        </div>
        <div className={styles.img3}>
          <div />
          <img src={img3} alt="skier" ref={(el) => (imgThree = el)} />
        </div>
        <div className={styles.shop_info}>
          <h2>SPRING SALE.</h2>
          <p>UP TO 30% OFF YOUR FAVOURITE MODELS.</p>
          <Link to="/shop">
            <button type="button">SHOP NOW</button>
          </Link>
        </div>
        <div className={styles.img4}>
          <img src={img4} alt="ski gear" />
        </div>
      </main>
    </div>
  );
};
export default HomeView;
