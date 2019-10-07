import React, { Component } from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';

class Projects extends Component {
  render() {
    var projectDisplay;
    if (this.props.projects) {
      projectDisplay = this.props.projects.map((project) =>
        <ProjectCard project={project} />
      );
    }
    else {
      projectDisplay = <p>No projects found</p>
    }

    return (
      <div className="Projects">
        {projectDisplay}
      </div>
    );
  }
}

export default Projects;