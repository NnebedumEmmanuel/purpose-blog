import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
     <div className="top">
      <div >
        <h1>Christ-Lifehub</h1>
        <p>Embracing Christ's Light: Illuminating Hearts and Minds"</p>
      </div>
      <div className="top">
        <a href="/">
          <i className="fa-brands fa-facebook-square "></i>
        </a>

        <a href="/">
          <i className="fa-brands fa-instagram-square "></i>
        </a>

        <a href="/">
          <i className="fa-brands fa-behance-square "></i>
        </a>

        <a href="/">
          <i className="fa-brands fa-twitter-square "></i>
        </a>
      </div>
     </div>
     <hr className="border-5"/>

     {/* <div className="bottom">
      <div>
        <a className="pb-0 mb-0" >Meet the saviour</a>
        <a className="pt-0 bt-0 h4">Contact us</a>
        <a href="/">Changelog</a>
        <a href="/">Status</a>
        <a href="/">License</a>
        <a href="/">All Versions</a>
      </div>

      <div>
        <a><a href="" className="h4">Community</a></a>
        <a href="/">Github</a>
        <a href="/">Issues</a>
        <a href="/">Project</a>
        <a href="/">Twitter</a>
      </div>

      <div>
        <a>Help</a>
        <a href="/">Support</a>
        <a href="/">Troubleshooting</a>
        <a href="/">Contact Us</a>    
      </div>

      <div>
        <a>Other Terms of Services</a>
        <a href="/">Privacy</a>
        <a href="/">Policy</a>
        <a href="/">License</a>
      </div>

     </div> */}
     <div className="bottom">
     <div>
      <p>© Copyright 2010 – 2023 Christ-Lifehub</p>
     </div>
     <div  aria-label="breadcrumb" >
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Terms of Service</a></li>
        <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Privacy Policy

</a></li>
       
      </ol>
     </div>
     </div>
    </div>
  );
};

export default Footer;
