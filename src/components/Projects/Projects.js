import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import rap from "../../assets/Projects/RAP.png";
import ionic from "../../assets/Projects/ionic.png";
import eureka from "../../assets/Projects/django.jpeg";
import time from "../../assets/Projects/ether.avif";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rap}
              isBlog={false}
              title="RAP-Road Accident Prevention"
              description="Deep Learning based road accident prevention system utilising convolutional neural networks and haar cascade classifier to predict driver drowsiness from his/her eyes."
              link="https://github.com/navyanshmahla/RAP-Road-Accident-Prevention"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ionic}
              isBlog={false}
              title="IonicJS + React Cross Platform Dashboard Application"
              description="Built a cross platform dashboard for iOS, Android SDK and web using IonicJS integrated with React."
              link="https://github.com/navyanshmahla/ionicjs-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eureka}
              isBlog={false}
              title="Eureka Website"
              description="Utilised Django framework for developing the backend of the website of Eureka (Flagship entrepreneurship event of IITB) with an estimated traffic of over 100k+ people across all Asia."
              link="https://github.com/navyanshmahla/eureka-django"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={time}
              isBlog={false}
              title="Time Capsule dApp"
              description="Developed the decentralised application of a fully functional time capsule using Solidity, Hardhat, metamsk, ether.js and web3.js."
              link="https://github.com/navyanshmahla/hello-foss-blockchain"
            />
          </Col>


          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
