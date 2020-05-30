import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer>
      <div className={styles.linkWrapper}>
        <div className={styles.shop}>
          <h3>SHOP</h3>
          <p>SKIS</p>
          <p>POLES</p>
          <p>POLES SIZE GUIDE</p>
          <p>SKI SIZE GUIDE</p>
        </div>
        <div className={styles.info}>
          <h3>INFORMATIONS</h3>
          <p>ABOUT US</p>
          <p>NEWS</p>
          <p>INVEST</p>
          <p>SPONSORSHIP</p>
          <p>JOBS</p>
          <p>INTERNSHIPS</p>
        </div>
        <div className={styles.legals}>
          <h3>LEGALS</h3>
          <p>SHIPPING & DUTIES</p>
          <p>REFUNDS & RETURNS</p>
          <p>TERMS & CONDITIONS</p>
          <p>PRIVACY POLICY</p>
          <p>WARRANTY</p>
        </div>
        <div className={styles.socials}>
          <h3>SOCIALS</h3>
          <p>FACEBOOK</p>
          <p>INSTAGRAM</p>
          <p>YOUTUBE</p>
        </div>
      </div>
      <aside>
        <p>SNOW. 2020. All Rigths Reserved. Terms. Privacy.</p>
        <p>Coded by A.W.</p>
        <p className={styles.info}>
          Text and images from <a href="https://factionskis.com/">Faction Website.</a>
        </p>
      </aside>
    </footer>
  );
};
export default Footer;
