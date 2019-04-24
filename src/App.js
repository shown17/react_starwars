import React, { Fragment, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './components/Home';
import People from './components/People';
import NoMatch from './components/NoMatch';
import { Container, } from "semantic-ui-react";

const App = () => (
  <Fragment>
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/people" component={People} />
        
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
);

export default App;
