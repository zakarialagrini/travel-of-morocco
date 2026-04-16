import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Destination from "../Components/Destination";
import Trip from "../Components/Trip";
import Footer from "../Components/Footer";
import heroImg from "../BOOK/hero.jpg";

function Home() {
    return(
      <>
      <Navbar />
       <Hero 
       cName="hero"
        heroImg={heroImg}
        title="Your Journey Your Store" 
        text="Chose Your Favorite Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show" 
        />
        <Destination/>
        <Trip />
        <Footer />

      </> 

      
    );

}

export default Home;