import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../BOOK/agadir.jpg";
import Trip2 from "../BOOK/casa.jpg";
import Trip3 from "../BOOK/bm.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">

      <TripData
        image={Trip1}
        heading="Agadir"
        text="Agadir, located along the Atlantic coast in southwestern Morocco, 
        is a vibrant city known for its beautiful beaches, sunny weather,
         and a blend of modernity with Moroccan culture. Here are some highlights:"
      />

      <TripData
        image={Trip2}
        heading="Casablanca"
        text="Casablanca, 
        often referred to as the economic and business hub of Morocco,
         is a bustling coastal city with a unique blend of history, 
         modernity, and vibrant culture. Here's an overview:"
      />

      <TripData
        image={Trip3}
        heading="Beni Mellal"
        text="Beni Mellal is a city located in the central part of Morocco,
         known for its agricultural significance, natural beauty,
          and cultural heritage. Here are some key aspects of Beni Mellal:"
      />
      </div>
    </div>
  );
}

export default Trip;
