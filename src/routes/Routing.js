import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeView from '../components/Views/HomeView/HomeView';
import AboutView from '../components/Views/AboutView/AboutView';
import NewsDetailedView from '../components/Views/NewsDetailedView/NewsDetailedView';
import NewsView from '../components/Views/NewsView/NewsView';
import DetailPage from '../components/Views/DetailPage/DetailPage';
import CheckoutView from '../components/Views/CheckoutView/CheckoutView';
import ShopView from '../components/Views/ShopView/ShopView';
import routes from './routes';

const Routing = () => (
  <Switch>
    <Route component={HomeView} />
    <Route exact path={routes.SHOP} component={ShopView} />
    <Route exact path={routes.ABOUT} component={AboutView} />
    <Route exact path={routes.DETAILEDNEWS} component={NewsDetailedView} />
    <Route exact path={routes.NEWS} component={NewsView} />
    <Route exact path={routes.DETAILEDITEM} component={DetailPage} />
    <Route exact path={routes.CHECKOUT} component={CheckoutView} />
  </Switch>
);

export default Routing;
