import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the oppurtunty to see a lot within a time frame</p>
     
     <DestinationData className="first-des" heading="Taal Volcano, Batangas" text= "What is the lorem quoteThe lorem ipsum gets its name from the Latin phrase Neque porro quisquam est qui dolorem ipsum quia dolor sit amet. which translates to Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain. What is the lorem quote The lorem ipsum gets its name from the Latin phrase Neque porro quisquam est qui dolorem ipsum quia dolor sit amet. which translates to “Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain."
      img1={Mountain1}
      img2={Mountain2} /> 

<DestinationData className="first-des-reverse" heading="Mt Daguldul, Batangas" text= "What is the lorem quoteThe lorem ipsum gets its name from the Latin phrase Neque porro quisquam est qui dolorem ipsum quia dolor sit amet. which translates to Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain. What is the lorem quote The lorem ipsum gets its name from the Latin phrase Neque porro quisquam est qui dolorem ipsum quia dolor sit amet. which translates to “Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain."
      img1={Mountain3}
      img2={Mountain4} /> 
    </div>
    
  );
};

export default Destination;
