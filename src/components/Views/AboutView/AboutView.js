import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AboutView.module.scss';
import img1 from '../../../img/about1.jpg';
import img2 from '../../../img/about2.jpg';

const AboutView = () => {
  return (
    <main className={styles.Wrapper}>
      <h2>About US</h2>
      <section className={styles.sectionOneWrapper}>
        <div className={styles.imgWrapper}>
          <img src={img1} alt="" />
        </div>
        <div className={styles.textWrapper}>
          <h3>AT SNOW</h3>
          <p>
            we make high-quality skis that are progressive in their construction as well as in their
            use in freeride, freestyle and all-mountain skiing. Some of the best athletes in the
            world inform our product journey. We capture their stories to inspire fans with exciting
            content.
          </p>
          <p>
            We are an independent group of skiers, artists, film-makers, engineers, partners,
            dreamers and doers that is so much more than the sum of its parts. We are united by a
            love for the mountains and the world’s finest tools of escape.
          </p>
        </div>
      </section>
      <section className={styles.sectionOneWrapper}>
        <div className={styles.textWrapper}>
          <h3> BORN IN THE SWISS ALPS</h3>
          <p>
            It started as a small rebellion. We were outcasts — an eclectic bunch of passionate
            skiers prototyping new ideas in the epic Alpine playground of Verbier, Switzerland.
            Snowboarding had unleashed the wildness of surf and skate culture into the mountains,
            while our beloved Alpine skiing was dominated by big brands that had lost touch with
            their fans, caught up in racing to the bottom and high-volume production.
          </p>
        </div>
        <div className={styles.imgWrapper}>
          <img src={img2} alt="" />
        </div>
      </section>
      <div className={styles.paragraphWrapper}>
        <p>
          Our industry-leading skis are designed and tested on the formidable mountain faces of the
          Swiss Alps, as always, but that our hardgoods team is now led from Innsbruck, Austria,
          brings to life the industry gold standard in hand-made, precision ski manufacturing. When
          you buy SNOW, you buy quality with a performance guarantee. Our skis are fit for purpose
          and built to last.
        </p>
        <p>
          But our greatest strength lies in the people who work tirelessly to design and deliver the
          best experience for our fans. We are led by visionaries who are motivated to change the
          face of skiing. Whether it’s our world-class engineers making new discoveries or our
          esteemed athletes reframing our perception of sport — or Candide Thovex bending reality —
          we aim to ignite the next generation of skiers.
        </p>
        <Link to="/shop">
          <button type="button"> SHOP NOW</button>
        </Link>
      </div>
    </main>
  );
};
export default AboutView;
