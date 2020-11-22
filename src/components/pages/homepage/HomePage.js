import React from "react";
import HeroSection from "../../herosection/HeroSection";
import "./HomePage.css";
import "../../../App.css";
import Cards from "../../card/Cards";
import Footer from "../../footer/Footer";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <Cards />
      <Footer />
    </div>
  );
}

export default HomePage;
