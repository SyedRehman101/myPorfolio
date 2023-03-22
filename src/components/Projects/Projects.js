import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import bitCoin from "../../Assets/Projects/bitcoin.png";
import newsShot from "../../Assets/Projects/newsShot.png";
import jobShot from "../../Assets/Projects/jobShot.png";
import nftShot from "../../Assets/Projects/nftShot.png";
import bitsOfCode from "../../Assets/Projects/pro2.png";

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
              imgPath={jobShot}
              isBlog={false}
              title="Job Portal"
              description="Search Jobs and post job & Apply Online on Job Portal first online best platform for all kind of Government and Private Jobs."
              demoLink="https://rcp-ortal-llc-syedrehman101.vercel.app/"
              ghLink="https://github.com/SyedRehman101/RCPortal-LLC"
            />
          </Col>
       
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nftShot}
              isBlog={false}
              title="NFT-Lavarse"
              description="blockchain analysis, however, we can track NFT wash trading by analyzing sales of NFTs to addresses that were self-financed, can purchase block scope area by using map."
              demoLink="https://63f7e44c15b9b104079a0176--fabulous-nft.netlify.app/"
              ghLink="https://github.com/SyedRehman101/Virual-NFT---LLC.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newsShot}
              isBlog={false}
              title="News App"
              description="It can be nearly impossible to keep up with every story you care about, Your Briefing makes it easy to stay in the know about what’s important and relevant in your world. It updates throughout the day to bring you the top local, national, and world headlines, plus personalized news tailored to your interests."
              demoLink="https://news-app-s96r-ihtkiwwg2-syedrehman101.vercel.app/"
              ghLink="https://github.com/SyedRehman101/NewsApp"
            />
          </Col>

       
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitCoin}
              isBlog={false}
              title="Digital Coin"
              description="You can check out a range of bitcoin apps that use the Coinbase API in the app gallery. We have rounded 100 types of Digital coin to update their price and details."
              demoLink="https://neon-capybara-c861c3.netlify.app"
              ghLink="https://github.com/SyedRehman101/Digital-Coin"
            />
          </Col>

         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink=""
              demoLink=""              
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Metro 1 News"
              description="Metro 1 News is the most respected and the most watched television news channel in the country and well known for its credible journalism. Channel is available in more than 50 million homes and dominates the news landscape, routinely notching the top ten programs in the genre.

              The Metro 1 News Pro offers you up-to-date quality news reports, breaking stories, world headlines, sports articles, and last but not the least,
              
              Download Metro 1 News and stay in the loop with important updates you wouldn’t want to miss.
              
              Features:
              - You’re just a click away from getting latest news from different beats including Lifestyle, Sports, Business, Entertainment, Health.
              
              - Live Streaming is one the salient features of the app that keeps you updated of latest happenings."
              ghLink=""
              demoLink="https://play.google.com/store/apps/details?id=com.something.syed.metro1&hl=en&gl=US"
            />
          </Col>
         

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
