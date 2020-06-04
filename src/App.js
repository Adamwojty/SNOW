import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import styles from './App.module.scss';
import Footer from './components/Footer/Footer';
import ScrollToTop from './ScrollToTop';
import CartModal from './components/CartModal/CartModal';
import Routing from './routes/Routing';

const App = () => {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ScrollToTop>
          <div>
            <div className={styles.container}>
              <Header />
              <CartModal />
              <div className={styles.wrapper}>
                <div className={styles.home}>
                  <Routing />
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
};

export default App;
