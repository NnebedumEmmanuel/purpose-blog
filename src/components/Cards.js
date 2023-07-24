import { Col, Card, Button} from "react-bootstrap";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./Cards.css"


 const CardList = ({ title, description, imgUrl, messageLink, siteLink }) => {
    return (
      <Col className="justify-content-space-between"  sm={5} md={3}>
        <Card className="card" >     
          <Card.Img src={imgUrl} alt="Project " className="card-image" />
          <Card.Body className="card-body">
            <Card.Title className="card-title">{title}</Card.Title>
            <Card.Text className="card-text">{description}</Card.Text>
            <Card.Subtitle>Apostle Joshua Selman</Card.Subtitle>
            <div className="linkContainer">
            <a href={messageLink} target="_blank" rel="noreferrer"><Button class="btn btn-primary">see more</Button></a>
            </div>
          </Card.Body>
        </Card>
      </Col>
    )
  }
  export default CardList