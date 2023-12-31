import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ContactImg from "../assets/contact.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>

    <Navbar /> 
    <Hero 
    cName="hero-mid" heroImg={ContactImg}  title="Contact"   url="crop&w=1200&q=60" btnClass="hide"
    />  
    <ContactForm/>
    <Footer/>
    </>
  );
}

export default Contact;
