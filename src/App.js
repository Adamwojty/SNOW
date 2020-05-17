import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeView from './components/Views/HomeView/HomeView';
import ShopView from './components/Views/ShopView/ShopView';
import AboutView from './components/Views/AboutView';
import NewsView from './components/Views/NewsView';
import Header from './components/Header/Header';
import styles from './App.module.scss';
import Footer from './components/Footer/Footer';
import ScrollToTop from './ScrollToTop';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <div>
            <div className={styles.container}>
              <Header />
              <div className={styles.wrapper}>
                <div className={styles.home}>
                  <Switch>
                    <Route exact path="/" component={HomeView} />
                    <Route exact path="/shop" component={ShopView} />
                    <Route exact path="/about" component={AboutView} />
                    <Route exact path="/news" component={NewsView} />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
};

export default App;
