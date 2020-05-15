import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Hamburger.module.scss';

const Hamburger = () => {
  return (
    <div className={styles.hamburger_menu}>
      <div className={styles.menu_secondary_background_color}></div>
      <div className={styles.menu_layer}>
        <div className={styles.menu_location_background}></div>
        <div className={styles.wrapper}>
          <div className={styles.menu_links}>
            <nav>
              <ul>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/shop">Shop Now</Link>
                </li>
                <li>
                  <Link to="/news">News</Link>
                </li>
              </ul>
            </nav>
            <div className={styles.info}>
              <h2>We make high-quality skis</h2>
              <p>
                that are progressive in their construction as well as in their use in freeride,
                freestyle and all-mountain skiing. Some of the best athletes in the world inform our
                product journey. We capture their stories to inspire fans with exciting content.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.locations}>
          Our Locations:
          <span>Chamonix Mont-Blanc</span>
          <span>Verbier</span>
          <span>Jackson Hole</span>
          <span>LAAX</span>
          <span>Hakuba</span>
        </div>
      </div>
    </div>
  );
};
export default Hamburger;
