import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ServiceImg from "../assets/Audio-1.jpeg";
import Footer from "../components/Footer";
import SlimCard from "../components/Grid";
import Grid from "../components/Grid";

function Podcast() {
  return (
    <>

    <Navbar /> 
    <Hero 
    cName="hero-mid" heroImg={ServiceImg}  title="Podcast"   url="crop&w=1200&q=60" btnClass="hide"
    />  
    <Grid/>
    
    <Footer/>
    </>
  );
}

export default Podcast;
