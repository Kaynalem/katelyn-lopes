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
                <a href="https://github.com/Kaynalem/katelyn-lopes/blob/master/src/assets/KatelynLopes.pdf" className="text-light text-decoration-none"><FontAwesomeIcon icon={faDownload} size="2x" alt="Download Resume"/></a>
                </div>
                

                </div>
                <div className="justify-content-center m-5">
                <div>
                        <h2 className="font-weight-bold">Proficiencies</h2>
                        
                    </div>
                    <div>
                        <h3>Front End</h3>
                        <p>HTML, CSS, Bootstrap, Materialize, JavaScript, jQuery, React.js, IndexedDB, Handlebars</p>
                    </div>
            
                    <div className="mt-5">
                        <h3>Back End</h3>
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