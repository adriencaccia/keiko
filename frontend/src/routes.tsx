import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import Pokemon from './pages/Home/Pokemon';

const Home = lazy(() => import('./pages/Home'));

const routes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/pokemon/:id" component={Pokemon} />
    </Switch>
  </Suspense>
);

export default routes;
