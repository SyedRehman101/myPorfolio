import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Syed Bilal Ur Rehman </span>
            from <span className="purple"> Karachi, Pakistan.</span>
            <br />
            I graduated from the <span className="purple">Sir Syed University of Engineering & Technology</span> with a degree in <span className="purple">Computer Science</span>.
            <br />
            My interests are in <span className="purple">Front End Engineering</span>, and I love to create beautiful and performant products with delightful user experiences.
            <br />
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I am enough of an artist to draw freely upon my imagination. Imagination is more important
            than knowledge. Knowledge is limited. Imagination encircles the world.”{" "}
          </p>
          <footer className="blockquote-footer">A.Einstein</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
