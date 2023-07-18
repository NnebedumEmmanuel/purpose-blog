import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
     <h1>Recent Trips</h1>
     <p>you can discover unique destination using google Maps</p> 
    <div className="tripcard">
      <TripData    
        image={Trip1}
        heading = "Trip in Indonosia"
        text ="What is the lorem quoteThe lorem ipsum gets its name from the Latin phrase Neque porro quisquam est qui dolorem ipsum quia dolor sit amet which translates to Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain. What is the lorem quote The lorem ipsum gets its name from the Latin phrase Neque porro quisquam est qui dolorem ipsum quia dolor sit amet. which translates to “Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain."
      />

<TripData 
        image={Trip2}
        heading = "Trip in Indonosia"
        text ="What is the lorem quoteThe lorem ipsum gets its name from the Latin phrase Neque porro quisquam est qui dolorem ipsum quia dolor sit amet which translates to Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain. What is the lorem quote The lorem ipsum gets its name from the Latin phrase Neque porro quisquam est qui dolorem ipsum quia dolor sit amet. which translates to “Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain."
      />

<TripData 
        image={Trip3}
        heading = "Trip in Indonosia"
        text ="What is the lorem quoteThe lorem ipsum gets its name from the Latin phrase Neque porro quisquam est qui dolorem ipsum quia dolor sit amet which translates to Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain. What is the lorem quote The lorem ipsum gets its name from the Latin phrase Neque porro quisquam est qui dolorem ipsum quia dolor sit amet. which translates to “Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain."
      />
    </div>

    </div>
  );
}

export default Trip;
