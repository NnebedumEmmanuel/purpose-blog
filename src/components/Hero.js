import "./HeroStyles.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css"


function Hero(props) {
  return (
    <>
   <div className={props.cName}>
     <img className={props.class} src={props.heroImg}  alt="cewdfujn;"/>

    <div className="hero-text">
      <h1>{props.title}</h1>
      <p>{props.text}</p>
      <a href={props.url} className={props.btnClass}>{props.buttonText}</a>

     </div>
   </div>
   </> 
   
  );
}

export default Hero;
