import React from 'react';
//import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function Navigation() {

    return (
        <Nav variant="pills" defaultActiveKey="/katelyn-lopes/#/about" className="row navigation" id="navigation">
            
            <Nav.Item>
                <Nav.Link eventKey="/home" href="/katelyn-lopes/#/home" id="hometab">
                    <h1 className="logo">K<span>L</span></h1>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/katelyn-lopes/#/about" className="" >About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="/portfolio" href="/katelyn-lopes/#/portfolio">Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="/contact" href="/katelyn-lopes/#/contact">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="/resume" href="/katelyn-lopes/#/resume">Resume</Nav.Link>
            </Nav.Item>
        </Nav>     

    );
};
    
export default Navigation;

/*import React from 'react';
import { Link } from 'react-router-dom';


const Navigation = () => {

    return (
        <div className="nav">
            <Link to="/">
                <h1 class="logo">K<span>L</span></h1>
            </Link>
            <Link to="/about" className="smoothscroll" >About</Link>
            <Link to="/portfolio" className="smoothscroll">Portfolio</Link>
            <Link to="/contact" className="smoothscroll">Contact</Link>
            <Link to="/resume" className="smoothscroll">Resume</Link>
        </div>
    );
};
    
export default Navigation;
*/