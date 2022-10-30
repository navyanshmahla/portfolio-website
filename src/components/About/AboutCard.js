import React from "react";
import Card from "react-bootstrap/Card";
import { FaHandPointRight } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Navyansh Mahla</span>,
            a passionate programmer and student from <span className="purple"> IIT-Bombay</span>.
            
            <br />
            <br />
            Apart from coding, some other activities I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <FaHandPointRight /> Watching anime
            </li>
            <li className="about-activity">
              <FaHandPointRight /> Playing chess
            </li>
            <li className="about-activity">
              <FaHandPointRight /> Travelling
            </li>
          </ul>

          <br/>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
