import Banner from "../components/Banner"
import Footer from "../components/Footer";
import HomeImg from "../assets/Christ-1.jpeg";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";



function Home() {
  return (
    <>
   
    <Navbar /> 
    <Hero 
    cName="hero"  heroImg={HomeImg} title="Your journey Your story" text="choose your favourite tours" buttonText="Travel plan" url="crop&w=1200&q=60" btnClass="show"
    /> 
    <Banner/>
    
    <Footer/>
    </>
   
  );
}

export default Home;
