import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Hamburger.module.scss';
import {
  displayReveal,
  strechReveal,
  staggerReveal,
  fadeInUpText,
  staggerText,
  staggerClose,
  displayClose,
} from '../../animations';

const Hamburger = ({ state }) => {
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);
  const locationBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);
  useEffect(() => {
    if (state.clicked === false) {
      displayClose(menu);
      staggerClose(revealMenu, revealMenuBackground);
    } else if (state.clicked === true || (state.clicked === true && state.initial === null)) {
      displayReveal(menu);
      strechReveal(revealMenuBackground, revealMenu);
      staggerReveal(revealMenuBackground, revealMenu);
      fadeInUpText(info);
      staggerText(line1, line2, line3);
    }
  }, [state]);

  return (
    <div ref={(el) => (menu = el)} className={styles.hamburger_menu}>
      <div
        ref={(el) => (revealMenuBackground = el)}
        className={styles.menu_secondary_background_color}
      ></div>
      <div ref={(el) => (revealMenu = el)} className={styles.menu_layer}>
        <div className={styles.menu_location_background}></div>
        <div className={styles.wrapper}>
          <div className={styles.menu_links}>
            <nav>
              <ul>
                <li>
                  <Link ref={(el) => (line1 = el)} to="/about">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link ref={(el) => (line2 = el)} to="/shop">
                    Shop Now
                  </Link>
                </li>
                <li>
                  <Link ref={(el) => (line3 = el)} to="/news">
                    News
                  </Link>
                </li>
              </ul>
            </nav>
            <div ref={(el) => (info = el)} className={styles.info}>
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
