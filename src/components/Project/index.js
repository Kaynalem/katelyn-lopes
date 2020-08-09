import React from 'react'; 
// get fontawesome imports
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Individual projects
function Projects(props) {
    return (
      <div className="cards"> 
        
        <div className="content h-100">
        <div className="img-container">
          <img alt={props.name} src={props.image}/>

          </div>
              <h5 className="project-title" id="card-title">{props.name}</h5>
              <p id="toolss">
                    {props.tools}
                </p>

              <a href={props.github}><FontAwesomeIcon icon={faGithub} size="2x" alt="GitHub"/></a> 
              <a href={props.deployed}><FontAwesomeIcon icon={faExternalLinkSquareAlt} size="2x" alt="Deployed link"/></a> 

              </div>

        </div>
    );
}
  
  export default Projects;