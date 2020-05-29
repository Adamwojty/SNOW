import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { visitHomePage } from '../../../actions';
import styles from './HomeView.module.scss';
import img2 from '../../../img/img2.jpg';
import img3 from '../../../img/shop_landning.jpg';
import { staggerPhotoReveal, sloganReveal } from '../../../animations';

const HomeView = () => {
  let slogan = useRef(null);
  let imgOne = useRef(null);
  const dispatch = useDispatch();
  const visitedHomePage = useSelector((state) => state.visitedMainPage);

  const handleVisitedPage = () => {
    if (!visitedHomePage) {
      sloganReveal(slogan);
      staggerPhotoReveal(imgOne);
      dispatch(visitHomePage(true));
    }
  };
  useEffect(() => {
    handleVisitedPage();
  });

  return (
    <main className={styles.page_wrapper}>
      <section className={styles.wrapper} ref={(el) => (slogan = el)}>
        <div className={styles.slogan_wrapper}>
          <header>White powder specialists.</header>
          <p>
            When you buy our skis, you buy quality with a performance guarantee. Our skis are fit
            for purpose and built to last.
          </p>
        </div>

        <div className={styles.img2}>
          <img src={img2} alt="skier" ref={(el) => (imgOne = el)} />
        </div>
      </section>

      <section className={styles.shop_section}>
        <div className={styles.shop_info}>
          <h2>SPRING SALE.</h2>
          <p>UP TO 30% OFF YOUR FAVOURITE MODELS.</p>
          <Link to="/shop">
            <button type="button">SHOP NOW</button>
          </Link>
        </div>
        <div className={styles.img3}>
          <img src={img3} alt="ski gear" />
        </div>
      </section>
    </main>
  );
};
export default HomeView;
