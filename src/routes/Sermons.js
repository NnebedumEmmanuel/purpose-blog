import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ServiceImg from "../assets/sermons.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
import Grid from "../components/Grid";

function Sermons() {
  return (
    <>

    <Navbar /> 
    <Hero 
    cName="hero-mid" heroImg={ServiceImg}  title=""   url="crop&w=1200&q=60" btnClass="hide"
    />  
    <Grid />
    <Trip/>
    <Footer/>
    </>
  );
}

export default Sermons;
