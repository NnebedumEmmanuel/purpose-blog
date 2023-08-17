import { Navbar } from "react-bootstrap";
import "../components/TheSaviour.css";
import Hero from "../components/Hero"


function TheSaviour(props) {
  return (
    
     <div>
       
        <h1>Meet The Saviourr</h1>
        <Hero 
    cName="hero-mid"   title="E-books"   url="crop&w=1200&q=60" btnClass="hide"
    /> 
        
     </div>

   
  );
}
export default TheSaviour