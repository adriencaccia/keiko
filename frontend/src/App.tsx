import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { Store } from 'redux';
import { Persistor } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { AppStyle } from './App.style';
import Root from './components/Root';
import Routes from './routes';

interface Props {
  history: History;
  persistor: Persistor;
  store: Store;
}

const RootComponentWithRoutes: React.FunctionComponent = () => (
  <Root>
    <Routes />
  </Root>
);

const App: React.FunctionComponent<Props> = ({ history, persistor, store }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <AppStyle />
        <Route path="/" component={RootComponentWithRoutes} />
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

export default App;
