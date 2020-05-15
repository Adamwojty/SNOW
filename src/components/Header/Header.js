import React from 'react';
import { Link } from 'react-router-dom';
import Hamburger from '../Hamburger/Hamburger';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <>
      <header>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.inner_header}>
              <div className={styles.logo}>
                <Link to="/">SKI SHOP</Link>
              </div>
              <div className={styles.menu}>
                <button type="button">Menu</button>
              </div>
            </div>
          </div>
        </div>
        <Hamburger />
      </header>
    </>
  );
};
export default Header;
