import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import news from "../../Assets/Projects/News.png";
import download from "../../Assets/Projects/download.jpg";
import food from "../../Assets/Projects/food.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
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
              imgPath={news}
              isBlog={false}
              title="NewsMonkey"
              description="My Personal News Website built using React and integrating external APIs offers a dynamic and engaging platform for users to stay updated with the latest happenings. Through integration with external APIs, such as those provided by news organizations or aggregators, the website fetches real-time news content from various sources across different categories like politics, technology, sports, and entertainment. This ensures that users have access to a diverse range of news articles and updates."
              ghLink="https://github.com/kundankp24/NewsMonkey-Website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={download}
              isBlog={false}
              title="Ecommerce"
              description="An e-commerce website built with the MERN (MongoDB, Express.js, React, Node.js) stack offers a robust and scalable platform for online retail. MongoDB serves as the database, storing product information, user data, and transaction details. Express.js provides a flexible and efficient backend framework, handling server-side logic and API requests. React, a powerful frontend library, enables the creation of dynamic and interactive user interfaces, allowing for seamless navigation and engaging shopping experiences. Node.js powers the server-side runtime environment, facilitating real-time data processing and asynchronous operations."
              ghLink="https://github.com/kundankp24/Ecomerce-Website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Food-Ording"
              description="
              A food ordering app built with the MERN (MongoDB, Express.js, React, Node.js) stack revolutionizes the way users interact with restaurants and food delivery services. MongoDB stores restaurant menus, user profiles, order histories, and other relevant data. Express.js powers the backend, managing server-side logic and handling API requests for functionalities like user authentication, menu retrieval, and order processing. React creates a dynamic and intuitive frontend interface, allowing users to browse menus, customize orders, and track deliveries in real-time. "
              ghLink="https://github.com/kundankp24/Food-Ording-Website"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
