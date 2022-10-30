import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiRust,
  DiSpark,
} from "react-icons/di";
import { 
  SiCplusplus,
  SiJava,
  SiPytorch, 
  SiTensorflow, 
  SiFirebase, 
  SiQiskit, 
  SiScikitlearn,
  SiGnubash
} from "react-icons/si";



function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {
        [
          <SiCplusplus />,
          <DiPython />,

          <DiJavascript1 />,
          <DiNodejs />,
          <DiReact />,
          <DiMongodb />,
          <SiPytorch />,
          <SiTensorflow />,
          <SiFirebase />,
          <DiRust />      
        ].map(tool => 
          <Col xs={4} md={2} className="tech-icons">
            {tool}
          </Col>)
      }
    </Row>
  );
}

export default Techstack;
