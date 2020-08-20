import React, { useState, useEffect, useRef } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Hamburger from '../Hamburger/Hamburger';
import styles from './Header.module.scss';
import { changeLogoOpen, changeLogoClose } from '../../animations';

const Header = ({ history }) => {
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: 'Menu',
  });
  let logo = useRef(null);

  const handleMenuClicked = () => {
    history.listen(() => {
      setState({ clicked: false, menuName: 'Menu' });
    });
  };

  const handleMenu = () => {
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: 'Close',
      });
      changeLogoOpen(logo);
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: 'Menu',
      });
      changeLogoClose(logo);
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: 'Close',
      });
      changeLogoOpen(logo);
    }
  };
  const changeHeaderColor = () => {
    if (state.clicked === false) {
      changeLogoClose(logo);
    } else if (state.clicked === true) {
      changeLogoOpen(logo);
    }
  };
  useEffect(() => {
    handleMenuClicked();
  });

  return (
    <>
      <header>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.inner_header}>
              <div className={styles.logo}>
                <Link to="/" ref={(el) => (logo = el)}>
                  SNOW.
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Hamburger
          state={state}
          logo={logo}
          handleMenu={handleMenu}
          changeHeaderColor={changeHeaderColor}
        />
      </header>
    </>
  );
};
export default withRouter(Header);
