import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ContactImg from "../assets/Ebook-1.jpeg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Ebook() {
  return (
    <>

    <Navbar /> 
    <Hero 
    cName="hero-mid" heroImg={ContactImg}  title="E-books"   url="crop&w=1200&q=60" btnClass="hide"
    />  
    <ContactForm/>
    <Footer/>
    </>
  );
}

export default Ebook;
