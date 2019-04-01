import React from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import { Container, } from 'semantic-ui-react';
import { Route, Switch, } from 'react-router-dom';

const App = () => (
  <>
    <Navbar/>
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Container>
  </>
)

export default App;
