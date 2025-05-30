import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="mt-4 text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/yash-jambure-7b1ab8359/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/people/Yash-Jambure/pfbid0BnxrnxT1JaErJfoEsTHxSpahqJo8sk6YNpww6F6DggGYsbLk5gjreEQYCZrxtx5al/#"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/yash_jambure_007/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
