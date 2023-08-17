import "./HeroStyles.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css"
import {Link} from "react-router-dom"


function Hero(props) {
  return (
    <>
   <div className={props.cName}>
     <img className={props.class} src={props.heroImg}  alt="cewdfujn;"/>

    <div className="hero-text">
      <h1>{props.title}</h1>
      <p>{props.text}</p>
      <Link to={props.url} className={props.btnClass}>
      {props.buttonText}
   </Link>

     </div>
   </div>
   </> 
   
  );
}

export default Hero;
