import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeView from './components/Views/HomeView/HomeView';
import ShopView from './components/Views/ShopView';
import AboutView from './components/Views/AboutView';
import NewsView from './components/Views/NewsView';
import Header from './components/Header/Header';
import styles from './App.module.scss';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <BrowserRouter>
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
      </BrowserRouter>
    </>
  );
};

export default App;
