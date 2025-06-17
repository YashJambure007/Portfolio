import { Animate } from "react-simple-animate";
import "./About.css";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personalDetails = [
  {
    label: "Name :",
    value: "Yash Jambure",
  },
  {
    label: "Age :",
    value: "21",
  },
  {
    label: "Address :",
    value: "India",
  },
  {
    label: "Email :",
    value: "jambureyash2003@gmail.com",
  },
  {
    label: "Contact No :",
    value: "+91 7249055729",
  },
];

const jobSummary =

  "Bridging the gap between logic and design, full stack development transforms ideas into reality Every line of code powers innovation from front to back";

const About = () => {
  return (
    <section id="about" className="about">
        <h1>About</h1>
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Full Stack Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev size={60} color="#871aa2" />
              </div>
              <div>
                <DiAndroid size={60} color="#871aa2" />
              </div>
              <div>
                <FaDatabase size={60} color="#871aa2" />
              </div>
              <div>
                <DiApple size={60} color="#871aa2" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;
