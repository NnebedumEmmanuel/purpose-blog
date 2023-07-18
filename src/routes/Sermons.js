import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ServiceImg from "../assets/night.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Sermons() {
  return (
    <>

    <Navbar /> 
    <Hero 
    cName="hero-mid" heroImg={ServiceImg}  title="Sermons"   url="crop&w=1200&q=60" btnClass="hide"
    />  
    <Trip/>
    <Footer/>
    </>
  );
}

export default Sermons;
