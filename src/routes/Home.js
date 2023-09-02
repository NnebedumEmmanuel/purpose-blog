import Banner from "../components/Banner"
import Footer from "../components/Footer";
import Christ1 from "../assets/christt.jpg"
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";



function Home() {
  return (
    <>
   
    <Navbar /> 
    <Hero 
    cName="hero "  heroImg={Christ1} title="Do you know who the Saviour is?" text="His Name is JESUS" buttonText="Meet JESUS" url="../routes/TheSaviour" btnClass="show"
    /> 
    <Banner/>
    
    <Footer/>
    </>
   
  );
}

export default Home;
