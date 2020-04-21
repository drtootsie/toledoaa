import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';
import Routes, { IRoute } from './Routes';

import CssBaseline from '@material-ui/core/CssBaseline';
import NavigationBar from './NavigationBar/NavigationBar';
import Footer from './Footer/Footer';

class App extends Component {
  render(): JSX.Element {
    return (
      <div>
        <CssBaseline />
        <NavigationBar />
        <Switch>
          {Routes.map((route: IRoute) => (
            <Route exact path={route.path} key={route.path}>
              <route.component />
            </Route>
          ))}
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
