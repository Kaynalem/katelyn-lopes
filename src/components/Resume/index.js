import React, { Component } from 'react';

import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Resume extends Component {
    render() {
        return (
            <section className="section-title container">
                <h1>Katelyn Lopes: <span>Resume</span></h1>
                <hr></hr>
                <div className="justify-content-center mt-5" id="resume">
                <h3 className="font-weight-bold mb-4">Download my resume</h3>
                <div>
                <a href="../../src/assets/KatelynLopes.pdf" className="text-light text-decoration-none" download><FontAwesomeIcon icon={faDownload} size="2x" alt="Download Resume"/></a>
                </div>
                

                </div>
                <div className="justify-content-center m-5">
                    <h1 className="font-weight-bold mb-3">Proficiencies</h1>
                    <div id="front-back">
                        <h2>Front End</h2>
                        <p>HTML, CSS, Bootstrap, Materialize, JavaScript, jQuery, React.js, IndexedDB, Handlebars</p>
                    </div>
            
                    <div id="front-back" className="mt-5">
                        <h2>Back End</h2>
                        <p>
                        Node.js, Express.js, SQL (sqlite, mySQL), Sequelize, NoSQL (MongoDB, Mongoose), API's (third-party, RESTful, server-side)
                        </p>
                    </div>
        </div>
            </section>
        )
    }
}
export default Resume;