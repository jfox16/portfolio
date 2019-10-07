import React, { Component } from 'react';
import './ProjectCard.css';
import { projectImages } from '../../Images';

import ProjectModal from "./ProjectModal";

class ProjectCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    }
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({
      showModal: true,
    });
  }

  hideModal() {
    this.setState({
      showModal: false,
    });
  }

  render() {
    let project = this.props.project;
    if (project) {
      return (
      <>
        <div className="ProjectCard" onClick={this.showModal}> 
          <div className="imgDiv">
            <img src={projectImages[project.key]} alt={project.key}/>
          </div>
          <div className="textDiv">
            <div className="titleDiv">
              <h1>{project.title}</h1>
              <h2>&nbsp;{(project.year) ? "• "+project.year : undefined}</h2>
            </div>
          </div>
        </div>

        <ProjectModal project={project} show={this.state.showModal} onHide={this.hideModal}/>
      </>
      );
    }
  }
}

export default ProjectCard;