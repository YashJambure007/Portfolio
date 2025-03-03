import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import CarFinder from "../assets/img/FinderCar.png";
import CreativeAgency from "../assets/img/creative agency.png";
import FreshCart from "../assets/img/FreshCart.png";
import SevenMentorWeb from "../assets/img/SevenMentor.png";
import ZomBiz from "../assets/img/ZomBiz.png";
import addtocart from "../assets/img/addtocart.jpeg"
import TodoList from "../assets/img/TodoList.webp"
import Gym from "../assets/img/Gym.png";
import NotesSaver from "../assets/img/Notes.avif";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import { FaGithub } from "react-icons/fa";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "CarFinder Website ",
      description: "Design & Development",
      imgUrl:  CarFinder,
      link: 'https://yashjambure007.github.io/CarFinder/'
    },
    {
      title: "Add To Cart",
      description: "Design & Development",
      imgUrl: addtocart,
       link: 'https://add-to-cart-4uiiura5q-yash-jambures-projects.vercel.app/'
    },
    
    {
      title: "Notes App",
      description: "Design & Development",
      imgUrl: NotesSaver,
      link: 'https://notes-app-xvzw.vercel.app/'
    },
  ];

  const projectsss = [
  
    {
      title: "SevenMentor Website",
      description: "Design & Development",
      imgUrl: SevenMentorWeb,
      link: 'https://yashjambure007.github.io/SevenMentorWeb/'
    },
    {
      title: "Todo List",
      description: "Design & Development",
      imgUrl: TodoList,
       link: 'https://todo-list-five-taupe-22.vercel.app/'
    },
    {
      title: "FreshCart Website",
      description: "Design & Development",
      imgUrl: FreshCart,
      link: 'https://yashjambure007.github.io/FreshCart/'
    },
  ];

  const projectss = [
    {
      title: "ZomBiz",
      description: "Design & Development",
      imgUrl: ZomBiz,
       link: 'https://yashjambure007.github.io/ZomBiz/'
    },
    {
      title: "Creative Agency",
      description: "Design & Development",
      imgUrl: CreativeAgency,
       link: 'https://creative-agency-c6tv.vercel.app/'
    },
    {
      title: "Gym",
      description: "Design & Development",
      imgUrl: Gym,
      link: 'https://gym-proj-tau.vercel.app/'
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
                <p>Designed and implemented a user-friendly interface using responsive design principles, ensuring optimal viewing across various devices.
                Optimized code for speed and efficiency, reducing page load times and enhancing user experience.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
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
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projectsss.map((project, index) => {
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
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projectss.map((project, index) => {
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
                  </Tab.Content>
                </Tab.Container>
              </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
      <a href="https://github.com/YashJambure007" className="gitanc">For More Information Visit GitHub <FaGithub className="git"/></a>
    </section>
  )
}
