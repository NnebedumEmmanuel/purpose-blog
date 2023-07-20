import { Col } from "react-bootstrap";
export const ProjectCard = ({ title, description, imgUrl, messageLink, siteLink }) => {
    return (
        <Col size={12} sm={6} md={4}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt="Project " />
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{description}</p>
            <div className="linkContainer">
            <a href={messageLink} target="_blank" rel="noreferrer"><i class="btn btn-primary"></i>git</a>
            </div>
          </div>
        </div>
      </Col>
    )
  }
  