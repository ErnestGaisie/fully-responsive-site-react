import React from "react";
import Button from "../button/Button";
import "./HeroSection.css";
import Video from "../../videos/pexels-tima-miroshnichenko-5453687.mp4";
import "../../App.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src={Video} autoPlay loop muted />
      <h1>QUICK DELIVERY AWAITS</h1>
      <p>What are you waiting for?</p>

      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TUTORIAL <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
