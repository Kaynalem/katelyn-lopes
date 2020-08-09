import React, { Component } from 'react';
import Projects from '../../components/Project'
import portfolio from '../../portfolio.json'

class Portfolio extends Component {
    render() {
        function Project(props) {
            return <div className="wrapper">{props.children}</div>;
        }
        return (
            <section className="section-title container">
                <h1 className="name">Portfolio</h1>
                <hr></hr>
                <h3 className="">Check out some of my work below or visit my GitHub page to see more</h3>
                <Project id="card-data">
                    {portfolio.map((project) => (
                    <Projects key={project.id} name={project.name} image={project.image}  github={project.github} deployed={project.deployed} tools={project.tools}/>
                    ))}
                </Project>
            </section>
        )
    }
}
export default Portfolio;