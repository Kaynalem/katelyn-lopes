import React, { Component } from 'react';
import { BrowserRouter as Router,  Switch, Route, Redirect } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Home from '../../components/Home';
import About from '../../components/About';
import Contact from '../../components/Contact';
import Portfolio from '../../components/Portfolio';
import Resume from '../../components/Resume';

class Header extends Component {
    render() {
    return (
        <Router>      
            <div id="header" className="row">
                <a href="/home"> <h1 className="logo">K<span>L</span></h1></a> 
                <Navigation />
            </div>
            <div className="content">
            <Switch>
                <Route exact path="/" render={() => (<Redirect to="/about"/>)} />
                <Route exact path="/home"component={Home} /> 
                <Route exact path="/about" component={About} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/resume" component={Resume} />
            </Switch>
            </div>
        </Router>
        )
    }
}

export default Header;
