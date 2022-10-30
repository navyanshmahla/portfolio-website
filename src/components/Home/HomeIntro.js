import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillMail,
  AiFillInstagram
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function HomeIntro() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF...
            </h1>
            <p className="home-about-body">
              I'm pursuing Civil Engineering at IIT-Bombay 💻.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C, C++, Python, Javascript. </b>
              </i>
              <br />
              <br />
              I'm mainly interested in &nbsp;
              <i>
                <b className="purple">High-Performance Computing</b>, {" "}
                <b className="purple">
                  Machine Learning
                </b>, and, recently <b className="purple">Blockchain</b>. 
                I'm also very passionate about the field of pure <b className="purple">Software Engineering</b>. 
              </i>
              <br />
              <br />
              I always try to learn new techniques and technologies every day.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/navyanshmahla"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/navyansh-mahla-519817223/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="mailto:navyanshmahla17@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/chill_kar_navyansh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default HomeIntro;
