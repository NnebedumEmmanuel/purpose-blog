import { Container, Row, Col, Tab,  } from "react-bootstrap";
import ProjectCard  from "./Cards";
import projImg1 from "../assets/christt.jpg";
import projImg2 from "../assets/christt.jpg";
import projImg3 from "../assets/christt.jpg";
import colorSharp2 from "../assets/christt.jpg";

import TrackVisibility from 'react-on-screen';

const Grid = () => {

  const Grid = [
    {
      title: "Tour webapp",
      description: "A webapp that helps you find the best tour",
      imgUrl: projImg1,
      messageLink: "https://github.com/NnebedumEmmanuel/portfolio",
      siteLink: "https://www.vercel.com"
    },
    {
      title: "Commercial Webapp",
      description: "A web app that provides interface for E-commerce",
      imgUrl: projImg2,
      messageLink: "https://github.com/NnebedumEmmanuel/portfolio"
      ,siteLink: "https://commercial-website-kbyc.vercel.app/?vercelToolbarCode=Yt3EOB3qJBhxl2n"
    },
    {
      title: "LANDING-PAGE",
      description: "Design & Development",
      imgUrl: projImg3,
      messageLink: "https://github.com/NnebedumEmmanuel/portfolio"
      ,siteLink: "https://www.vercel.com"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      messageLink: "https://github.com/NnebedumEmmanuel/portfolio"
      ,siteLink: "https://www.vercel.com"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      messageLink: "https://github.com/NnebedumEmmanuel/portfolio"
      ,siteLink: "https://www.vercel.com"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      messageLink: "https://github.com/NnebedumEmmanuel/portfolio"
      ,siteLink: "https://www.vercel.com"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>These are some of my works, feel ree to check it out.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav> */}
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          Grid.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  )
}

export default Grid