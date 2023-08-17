import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Sermons from "./routes/Sermons";
import Ebook from "./routes/E-book";
import Podcast from "./routes/Podcast";
import Saviour from "./routes/TheSaviour";




export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sermons" element={<Sermons />} />
        <Route path="/E-book" element={<Ebook />} />   
        <Route path="/Podcast" element={<Podcast />} />  
        <Route path="/contact" element={<Contact />} />  
     
         
       
      </Routes>
     <home />
     <Saviour/>
  
    
  

    </div>
  );
}
