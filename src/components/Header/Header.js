import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Hamburger from '../Hamburger/Hamburger';
import styles from './Header.module.scss';

const Header = ({ history }) => {
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: 'Menu',
  });
  const [disabled, setDisabled] = useState(false);

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
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: 'Menu',
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: 'Close',
      });
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
                  <div />
                  <div />
                  <div />
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
