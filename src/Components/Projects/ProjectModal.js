import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { projectImages } from '../../Images';
import "./ProjectModal.css";

class ProjectModal extends Component {
  render() {
    var project = this.props.project;
    if (project) {
      let playLink, tryLink, gitHubLink;
      if (project.playUrl) {
        playLink = <Button href={project.playUrl} className="Button">Play it here!</Button>;
      }
      if (project.tryUrl) {
        tryLink = <Button href={project.tryUrl} className="Button">Try it here!</Button>;
      }
      if (project.gitHubUrl) {  
        gitHubLink = <Button href={project.gitHubUrl} className="Button">Check out the GitHub</Button>;
      }
      return (
        <Modal show={this.props.show} onHide={this.props.onHide} >
          <Modal.Header closeButton>
            <Modal.Title>{project.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="ModalBody">
            <img src={projectImages[project.key]} alt={project.key}/>
            <p className="intro">{project.intro}</p>
            {project.description && <p className="description">{project.description}</p>}
            {playLink}
            {tryLink}
            {gitHubLink}
          </Modal.Body>
        </Modal>
      );
    }
  }
}

export default ProjectModal;