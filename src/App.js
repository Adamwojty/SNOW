import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DetailPage from './components/Views/DetailPage/DetailPage';
import HomeView from './components/Views/HomeView/HomeView';
import ShopView from './components/Views/ShopView/ShopView';
import AboutView from './components/Views/AboutView/AboutView';
import NewsView from './components/Views/NewsView/NewsView';
import Header from './components/Header/Header';
import styles from './App.module.scss';
import Footer from './components/Footer/Footer';
import ScrollToTop from './ScrollToTop';
import CartModal from './components/CartModal/CartModal';
import CheckoutView from './components/Views/CheckoutView/CheckoutView';
import NewsDetailedView from './components/Views/NewsDetailedView/NewsDetailedView';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <div>
            <div className={styles.container}>
              <Header />
              <CartModal />
              <div className={styles.wrapper}>
                <div className={styles.home}>
                  <Switch>
                    <Route exact path="/shop" component={ShopView} />
                    <Route exact path="/about" component={AboutView} />
                    <Route exact path="/news/:id" component={NewsDetailedView} />
                    <Route exact path="/news" component={NewsView} />
                    <Route exact path="/shop/:id" component={DetailPage} />
                    <Route exact path="/checkout" component={CheckoutView} />
                    <Route path="/" component={HomeView} />
                  </Switch>
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
