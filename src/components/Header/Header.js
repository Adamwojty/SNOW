/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Hamburger from '../Hamburger/Hamburger';
import styles from './Header.module.scss';
import {
  rotateHamburgerLine1,
  hideHamburgerLine2,
  rotateHamburgerLine3,
  rotatebackHamburgerLine,
  showHamburgerLine2,
} from '../../animations';

const Header = ({ history }) => {
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: 'Menu',
  });
  const [disabled, setDisabled] = useState(false);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);

  useEffect(() => {
    history.listen(() => {
      setState({ clicked: false, menuName: 'Menu' });
    });
  });

  const handleDisableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  const handleMenu = () => {
    handleDisableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: 'Close',
      });
      rotateHamburgerLine1(line1);
      hideHamburgerLine2(line2);
      rotateHamburgerLine3(line3);
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: 'Menu',
      });
      rotatebackHamburgerLine(line1, line3);
      showHamburgerLine2(line2);
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: 'Close',
      });
      rotateHamburgerLine1(line1);
      hideHamburgerLine2(line2);
      rotateHamburgerLine3(line3);
    }
  };
  return (
    <>
      <header>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.inner_header}>
              <div className={styles.logo}>
                <Link to="/">SNOW.</Link>
              </div>
              <div className={styles.menu}>
                <button type="button" onClick={handleMenu} disabled={disabled}>
                  <div className={styles.hamburger_inner} ref={(el) => (line1 = el)} />
                  <div className={styles.hamburger_inner} ref={(el) => (line2 = el)} />
                  <div className={styles.hamburger_inner} ref={(el) => (line3 = el)} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <Hamburger state={state} />
      </header>
    </>
  );
};
export default withRouter(Header);
