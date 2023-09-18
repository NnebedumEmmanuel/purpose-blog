import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import EBook from "../assets/E-book.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Ebook() {
  return (
    <>

    <Navbar /> 
    <Hero 
    cName="hero-mid" heroImg={EBook}  title="E-books"   url="crop&w=1200&q=60" btnClass="hide" 
    />  
    <ContactForm/>
    <Footer/>
    </>
  );
}

export default Ebook;
