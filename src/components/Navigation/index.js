import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {

    return (
        <div className="nav">
            <Link to="/home">
                <h1 className="logo">K<span>L</span></h1>
            </Link>
            <Link to="/about" className="" >About</Link>
            <Link to="/portfolio" className="">Portfolio</Link>
            <Link to="/contact" className="">Contact</Link>
            <Link to="/resume" className="">Resume</Link>
        </div>
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