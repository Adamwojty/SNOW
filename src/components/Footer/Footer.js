import React from 'react';
import styles from './Footer.module.scss';

const data = [
  { title: 'SHOP', items: ['SKIS', 'POLES', 'GOOGLES', 'SKI SIZE GUIDE'] },
  {
    title: 'INGORMATION',
    items: ['ABOUT US', 'NEWS', 'INVEST', 'SPONSORSHIP', 'JOBS', 'INTERNSHIPS'],
  },
  {
    title: 'LEGALS',
    items: [
      'SHIPPING & DUTIES',
      'REFUNDS & RETURNS',
      'TERMS & CONDITIONS',
      'PRIVACY POLICY',
      'WARRANTY',
    ],
  },
  { title: 'SOCIALS', items: ['FACEBOOK', 'INSTAGRAM', 'YOUTUBE'] },
];

const Footer = () => {
  return (
    <footer>
      <div className={styles.linkWrapper}>
        {data.map((item) => (
          <div>
            <h3>{item.title}</h3>
            {item.items.map((paragraph) => (
              <p>{paragraph}</p>
            ))}
          </div>
        ))}
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
