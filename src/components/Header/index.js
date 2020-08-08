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

/*import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import About from '../../components/About';
import Contact from '../../components/Contact';
import Portfolio from '../../components/Portfolio';
import Resume from '../../components/Resume';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends Component {
    render() {
    return (
        
        <Router>
            <header id="home">

            <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
          <Navigation />

                

            
            <div id="nav" className="nav">
                <Route exact path="/" render={() => (<Redirect to="/portfolio"/>)} />

                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
            </div>
            </nav>
            <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">Katelyn <span>Lopes</span></h1>
            <h3>San Antonio based coding boot camp student</h3>
            <hr />
            <ul className="social">

            <li key="github"><a href="https://github.com/Kaynalem"><FontAwesomeIcon icon={faGithub} size="2x" alt="GitHub" className="text-info mr-4"/></a></li>
            <li key="linkedin"><a href="https://www.linkedin.com/in/katelynlopes/"><FontAwesomeIcon icon={faLinkedin} size="2x" alt="LinkedIn" className="text-info"/></a></li>
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><FontAwesomeIcon icon={faChevronCircleDown}/></a>
      </p>

            </header>
        </Router>
        )
    }
}

export default Header;*/