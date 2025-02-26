import { Col } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <a href={link}>Live Preview</a>
        </div>
      </div>
    </Col>
  )
}
