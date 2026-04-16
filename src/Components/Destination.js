import Mountain1 from "../BOOK/jamaa.jpg" 
import Mountain2 from "../BOOK/souk.jpg" 
import Mountain3 from "../BOOK/tanja3.jpg"
import Mountain4 from "../BOOK/tanja4.jpg"
import DestinationData from "./DestinationData"

import "./DestinationStyles.css"

const Destination = () => {
    return(
        <div className="destination">
            <h1>popular Destination</h1>
            <p>Tous give you the opportunity to </p>
            <DestinationData
            className="first-des"
            heading="Marrakech"
            text="Marrakech, a city in Morocco,
            is a fascinating destination known for its rich history,
             vibrant culture, and unique characteristics.
              However, I'm not sure what specific information or aspect 
              of Marrakech you're asking about.
               Could you please clarify your question or specify the 
               details you'd like to know about Marrakech?
                Whether it's about its history, 
           attractions, culture, or anything else, 
           I'd be happy to provide more information!"
           img1={Mountain1}
           img2={Mountain2}
           
           />
            <DestinationData
            className="first-des-reverse"
            heading="Tangier"
            text="Tangier, 
            nestled at the northern tip of Morocco,
             is a city steeped in a captivating blend of history, culture,
              and strategic significance. 
              With a legacy shaped by diverse civilizations that traversed its shores, 
              from ancient Phoenicians to colonial powers,
               Tangier stands as a testament to its multicultural heritage. 
               Its Kasbah, a historic fortress resonating with traditional Moroccan architecture,
                overlooks the Strait of Gibraltar, 
                symbolizing its strategic importance as a gateway between continents.
                 The bustling Medina, adorned with vibrant markets and labyrinthine streets,
                  exudes the city vibrant essence. Tangier's allure lies not only in its rich history but also in its modern vibrancy, welcoming visitors with a tapestry of cultural influences, scenic beauty, and a unique fusion of Moroccan, European, and African flavors,
             making it a magnetic destination for those seeking an enchanting crossroads of civilizations."
           img3={Mountain3}
           img4={Mountain4}
           
           />
            
            
            </div>

    )
}


export default Destination;