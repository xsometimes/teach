import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { routes } from './routes'

export function renderRoutes () {
  return routes && Array.isArray(routes) && routes.length ? (
    <BrowserRouter>
      <Switch>
        {
          routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              strict={route.strict}
              render={props => (
                <route.component {...props} route={route} />
              )} />
          ))
        }
      </Switch>
    </BrowserRouter>
  ) : null;
};
