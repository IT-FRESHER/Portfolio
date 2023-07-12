import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Durgesh Tiwari </span>
            from <span className="purple"> Gwalior, Madhya Pradesh.</span>
            <br /> I hold a Master's degree in Computer Applications (MCA)
            and have been working in the field for the past 6 months.          
            <br />
            Additionally, I am currently employed as a software developer at
            Numeric Infosystem Pvt. Ltd.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Durgesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
