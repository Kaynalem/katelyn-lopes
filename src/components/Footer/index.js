import React from 'react';

// get fontawesome imports
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
        <div className="">
           <ul className="social-links">
           <li><a href="https://github.com/Kaynalem"><FontAwesomeIcon icon={faGithub} size="lg" alt="GitHub"/></a></li>
           <li><a href="https://www.linkedin.com/in/katelynlopes/"><FontAwesomeIcon icon={faLinkedin} size="lg" alt="LinkedIn"/></a></li>
            </ul>
        </div>
    </footer>
  );
};

export default Footer;

/*import React from 'react';

// get fontawesome imports
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-dark p-4" id="footer">
        <div className="container text-center">
            <a href="https://github.com/Kaynalem"><FontAwesomeIcon icon={faGithub} size="2x" alt="GitHub" className="text-info mr-4"/></a>
            <a href="https://www.linkedin.com/in/katelynlopes/"><FontAwesomeIcon icon={faLinkedin} size="2x" alt="LinkedIn" className="text-info"/></a>
        </div>
    </footer>
  );
};

export default Footer;*/