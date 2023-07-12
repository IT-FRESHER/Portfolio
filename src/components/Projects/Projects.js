import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tallybuddy from "../../Assets/Projects/TallyBuddy.png";

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
              imgPath={tallybuddy}
              isBlog={false}
              title="TallyBuddy"
              description="TallBuddy is a mobile application developed using the React Native framework. This app offers several features designed to enhance the user experience. The key functionalities of TallBuddy include location fetching, camera integration, and barcode scanning. This project aims to provide users with a convenient and efficient way to access location data, capture images, and scan barcodes. we have implemented a flexible system to support over 100 screens with language change and dynamic theme adaptation based on the user's mobile settings"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
