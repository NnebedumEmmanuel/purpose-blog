import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Img from "../assets/night.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";


function About() {
  return (
    <>

    <Navbar /> 
    <Hero 
    cName="hero-mid" heroImg={Img}  title="About"   url="crop&w=1200&q=60" btnClass="hide"
    /> 
    <AboutUs/>
    <Footer/> 
    </>
    
   
  );
}

export default About;
