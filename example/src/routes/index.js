import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Menu from '../components/Menu';
import HomePage from '../pages/HomePage';
import { PrivateRoute, useKeycloak } from 'secure-react-keycloak';
import ProtectedPage from '../pages/ProtectedPage';


export const AppRouter = () => {
  const [, initialized] = useKeycloak();
  if (!initialized) {
    return <h3>Loading ... !!!</h3>;
  }
  return (<>
      <Menu />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <PrivateRoute roles={['WLAdmin']} path="/protected" component={ProtectedPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
