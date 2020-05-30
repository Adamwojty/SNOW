/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable no-return-assign */
/* eslint-disable react/require-default-props */
import React, { useEffect, useRef, useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import styles from './Hamburger.module.scss';
import {
  displayReveal,
  strechReveal,
  staggerReveal,
  fadeInUpText,
  staggerText,
  staggerClose,
  displayClose,
  rotateHamburgerLine1,
  hideHamburgerLine2,
  rotateHamburgerLine3,
  rotatebackHamburgerLine,
  showHamburgerLine2,
  handleCityReturn,
  handleHover,
  handleHoverExit,
  handleLocation,
} from '../../animations';
import chamonixImg from '../../img/chamonix.jpg';
import hakubaImg from '../../img/hakuba.jpg';
import jacksonHoleImg from '../../img/jacksonhole.jpg';
import verbierImg from '../../img/verbier.jpg';
import laaxImg from '../../img/laax.jpg';

const locations = [
  {
    name: 'Chamonix',
    image: chamonixImg,
    description: `Chamonix valley can boast of some of the best skiing and scenery in the Alps and a hard-to-beat list of winter sports activities. The Chamonix area offers a sensational amount of skiing & snowboarding terrain, both on & off-piste.`,
  },
  {
    name: 'Verbier',
    image: verbierImg,
    description:
      'You will love Verbier if you live for off-piste and freeride skiing or boarding and luck into some decent conditions. The mountains around Verbier have numerous ski descents of over 2000m vertical and are perfect for heli skiing.',
  },
  {
    name: 'Jackson Hole',
    image: jacksonHoleImg,
    description:
      'Jackson Hole is located in the cowboy state of Wyoming in the shadow of the Grand Teton. Jackson Hole Resort is renowned for the powder skiing. With around 459 inches (11.7m) of snowfall per season, there is an abundance of the white stuff that is typically light and fluffy.',
  },
  {
    name: 'LAAX',
    image: laaxImg,
    description:
      'Statistically, Laax stacks up pretty well against all the biggest & best ski resorts in the world. Topped with the Vorab Glacier above 3000m, the resorts 224km of piste trails range from the high alpine to forested slopes over a staggering 1918m skiable vertical.',
  },
  {
    name: 'Hakuba',
    image: hakubaImg,
    description:
      'Hakuba is blessed with plenty of snow; an average of 11-13 metres of powder per season. Hakuba offers lots of powder days and plenty of opportunities to sample the famous Japow!',
  },
];

const Hamburger = ({ state, handleMenu, changeHeaderColor }) => {
  const [disabled, setDisabled] = useState(false);
  // REFS
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);
  let locationBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);
  let descriptionHeader = useRef(null);
  let description = useRef(null);
  let burgerline1 = useRef(null);
  let burgerline2 = useRef(null);
  let burgerline3 = useRef(null);

  const handleDisableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };
  const handleMenuAnimations = () => {
    handleDisableMenu();
    if (state.clicked === false) {
      displayClose(menu);
      staggerClose(revealMenu, revealMenuBackground);
      rotatebackHamburgerLine(burgerline1, burgerline3);
      showHamburgerLine2(burgerline2);
      changeHeaderColor();
    } else if (state.clicked === true || (state.clicked === true && state.initial === null)) {
      rotateHamburgerLine1(burgerline1);
      hideHamburgerLine2(burgerline2);
      rotateHamburgerLine3(burgerline3);
      displayReveal(menu);
      strechReveal(revealMenuBackground, revealMenu);
      staggerReveal(revealMenuBackground, revealMenu);
      fadeInUpText(info);
      staggerText(line1, line2, line3);
      changeHeaderColor();
    }
  };

  useEffect(() => {
    handleMenuAnimations();
  }, [state]);

  return (
    <>
      <div className={styles.menu}>
        <button type="button" onClick={handleMenu} disabled={disabled}>
          <div className={styles.hamburger_inner} ref={(el) => (burgerline1 = el)} />
          <div className={styles.hamburger_inner} ref={(el) => (burgerline2 = el)} />
          <div className={styles.hamburger_inner} ref={(el) => (burgerline3 = el)} />
        </button>
      </div>
      <div ref={(el) => (menu = el)} className={styles.hamburger_menu}>
        <div
          ref={(el) => (revealMenuBackground = el)}
          className={styles.menu_secondary_background_color}
        ></div>
        <div ref={(el) => (revealMenu = el)} className={styles.menu_layer}>
          <div
            ref={(el) => (locationBackground = el)}
            className={styles.menu_location_background}
          ></div>
          <div className={styles.wrapper}>
            <div className={styles.menu_links}>
              <nav>
                <ul>
                  <li>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      ref={(el) => (line1 = el)}
                      to="/about"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      ref={(el) => (line2 = el)}
                      to="/shop"
                    >
                      Shop Now
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      ref={(el) => (line3 = el)}
                      to="/news"
                    >
                      News
                    </Link>
                  </li>
                </ul>
              </nav>
              <div ref={(el) => (info = el)} className={styles.info}>
                <h2 ref={(el) => (descriptionHeader = el)}>We make high-quality skis</h2>
                <p ref={(el) => (description = el)}>
                  that are progressive in their construction as well as in their use in freeride,
                  freestyle and all-mountain skiing. Some of the best athletes in the world inform
                  our product journey. We capture their stories to inspire fans with exciting
                  content.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.locations}>
            Our Locations:
            {locations.map((el) => (
              <span
                key={el.name}
                onMouseEnter={() =>
                  handleLocation(el, locationBackground, description, descriptionHeader)
                }
                onMouseOut={() =>
                  handleCityReturn(descriptionHeader, description, locationBackground)
                }
              >
                {el.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Hamburger);
