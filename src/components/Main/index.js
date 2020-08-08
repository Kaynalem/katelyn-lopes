import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Navigation from '../../components/Navigation';
import Home from '../../components/Home';
import About from '../../components/About';
import Contact from '../../components/Contact';
import Portfolio from '../../components/Portfolio';
import Resume from '../../components/Resume';


const Main = () => (
  <Switch>
    <Route exact path="/" render={() => (<Redirect to="/about"/>)}  />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/resume" component={Resume} />
  </Switch>
)

export default Main;