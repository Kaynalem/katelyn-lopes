import React from 'react';

// get fontawesome imports
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="">
            <ul className="social-links">
            <li><a href="https://github.com/Kaynalem"><FontAwesomeIcon icon={faGithub} size="lg" alt="GitHub"/></a></li>
            <li><a href="https://www.linkedin.com/in/katelynlopes/"><FontAwesomeIcon icon={faLinkedin} size="lg" alt="LinkedIn"/></a></li>
            <li><a href="https://stackoverflow.com/users/14073830/klopes"><FontAwesomeIcon icon={faStackOverflow} size="lg" alt="StackOverflow"/></a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
