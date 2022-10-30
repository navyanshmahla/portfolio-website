import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../assets/home2.svg";
import Particle from "../Particle";
import HomeIntro from "./HomeIntro";
import Type from "./Type";
import me from "../../assets/me.png";
function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> NAVYANSH MAHLA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={me} alt="myself" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
      <HomeIntro />
    </section>
  );
}

export default Home;
