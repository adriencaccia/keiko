import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import HomeWithDataFetching from './pages/Home/Home.wrap';
import PokemonWithDataFetching from './pages/Pokemon/Pokemon.wrap';

const routes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route exact path="/">
        <Redirect to="/pokedex/1" />
      </Route>
      <Route path="/pokedex/:page" component={HomeWithDataFetching} />
      <Route path="/pokemon/:id" component={PokemonWithDataFetching} />
    </Switch>
  </Suspense>
);

export default routes;
