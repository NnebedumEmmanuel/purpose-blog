import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ServiceImg from "../assets/service-ga6c26acb0_1280.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() {
  return (
    <>

    <Navbar /> 
    <Hero 
    cName="hero-mid" heroImg={ServiceImg}  title="Services"   url="crop&w=1200&q=60" btnClass="hide"
    />  
    <Trip/>
    <Footer/>
    </>
  );
}

export default Service;
