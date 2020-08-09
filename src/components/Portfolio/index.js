import React, { Component } from 'react';
import Projects from '../../components/Project'
import portfolio from '../../portfolio.json'

function Project(props) {
    return <div className="row">{props.children}</div>;
}

class Portfolio extends Component {
    render() {
        return (
            <section className="section-title container">
                <h1 className="name">Portfolio</h1>
                <hr></hr>
                <Project id="card-data" className="card">
                    {portfolio.map((project) => (
                    <Projects key={project.id} image={project.image} name={project.name} github={project.github} deployed={project.deployed} tools={project.tools}/>
                    ))}
                </Project>
            </section>
        )
    }
}
export default Portfolio;