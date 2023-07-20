import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Img from "../assets/about.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";


function About() {
  return (
    <>

    <Navbar /> 
    <Hero 
    cName="hero-mid" heroImg={Img}  title=""   url="crop&w=1200&q=60" btnClass="hide"
    /> 
    <AboutUs/>
    <Footer/> 
    </>
    
   
  );
}

export default About;
