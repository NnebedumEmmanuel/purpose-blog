import HomeImg from "../assets/12.jpg";
import Hero from "../components/Hero";
import Navbar from "../components/Nav";



function Home() {
  return (
    <>
   
    <Navbar /> 
    <Hero 
    cName="hero" heroImg={HomeImg} title="Your journey Your story" text="choose your favourite tours" buttonText="Travel plan" url="crop&w=1200&q=60" btnClass="show"
    /> 
     
    </>
   
  );
}

export default Home;
