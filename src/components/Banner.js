import { Col, Card, Button, Container, Row} from "react-bootstrap";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css"
// import projImg1 from "../assets/Christt.jpg"
import hebrew from "../assets/hebrew.jpg"
import bible from "../assets/bilble-view.jpg"
import { Link } from "react-router-dom";

 const Banner = ({ title, description, imgUrl, messageLink, siteLink }) => {
    
    return (
        <div className="mx-0 p-0">
           <div className="container-fluid just  mb-3  p-0 mx-1">
            <Row className="row mt-5 justify-content-center">
                <Col className="col-md-5 col-sm-12" >
                <h1 className="text-center h2 fw-bold mb-5 fs">Welcome to Christ blog</h1>
                <p className="text-left ">Christ blog is a place where Christians from all over the world can go and find comforting words, stories, poems, biblical knowledge and insight, scriptural advice, and most importantly the love of Jesus that we all share as children of God and joint-heirs with Christ.I will be posting as often as I can and I encourage comments for proper insight on what my readers like or dislike, or so that you can all strengthen me as well. Also, so that I can pray for you when needed. All comments on Christ blog will be moderated to ensure adherence to the Christ blog Comment Policy.</p>
                
                </Col>
                <Col className="col-md-5 col-sm-12"  >
                <img className="img-fluid mx-0 p-o" src={bible} alt="alpha" />
                </Col>
            </Row>
            </div>
            
            <div className="container-fluid just  mb-3  p-0 mx-1">
            <Row className="row mt-5 justify-content-center">
            <Col className="col-md-5 col-sm-12"  >
                <img className="img-fluid mx-0 p-o" src={hebrew} alt="alpha" />
                </Col>
                <Col className="col-md-5 col-sm-12" >
                
                <p  className="text-left ">Hebrews 10:24 – 25 states, “And Let us consider one another in order to stir up love and good works, not forsaking the assembling of ourselves together, as is the manner of some, but exhorting one another, and so much more as you see the Day approaching.”So, if the Lord speaks to your heart, strengthens, blesses, or otherwise comforts you in any way due to the contents of this blog website, please feel free to let me know and share it on your social media platform so we can continue to be faithful to God in sharing His word and sharpening each other.</p>
                

              
                </Col>
            </Row>
            </div>
            {/* <p className="text-left">Christ blog is a place where Christians from all over the world can go and find comforting words, stories, poems, biblical knowledge and insight, scriptural advice, and most importantly the love of Jesus that we all share as children of God and joint-heirs with Christ.I will be posting as often as I can and I encourage comments for proper insight on what my readers like or dislike, or so that you can all strengthen me as well. Also, so that I can pray for you when needed. All comments on Christ blog will be moderated to ensure adherence to the Christ blog Comment Policy.</p> */}
           <div className="mx-5 text-center">
           <p className="mt-5">Welcome to Christ blog
            My prayer is that the contents on this blog website will help to strengthen and equip all of us to fight the good fight as soldiers of God, as we move forward in our faith and closer to that glorious day when we will all see Jesus face-to-face and hear Him say “Well done My good and faithful servant; you have been faithful over a few things, I will make you ruler over many things. Enter into the joy of your Lord” (Matthew 25:23). </p>
            <p className="d-none d-lg-block"></p>
           </div>

            
              </div>
     
    )
  }
  export default Banner