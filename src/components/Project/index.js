import React from 'react'; 
// get fontawesome imports
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Individual projects
function Projects(props) {
    return (
      <div className="card"> 
        <div className="card-img-top">
          <img alt={props.name} src={props.image}/>
        </div>
        <div className="card-body">
              <p className="card-title">{props.name}</p>
              <p>
              <a href={props.github}><FontAwesomeIcon icon={faGithub} size="2x" alt="GitHub"/></a> 
              <a href={props.deployed}><FontAwesomeIcon icon={faExternalLinkSquareAlt} size="2x" alt="Deployed link"/></a> 
              </p>
              <p className="card-text">
                    {props.tools}
                </p>
        </div>
      </div>
    );
}
  
  export default Projects;