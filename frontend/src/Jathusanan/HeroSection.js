import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./Button.css";
import "./HeroSection.css";
import Video from "./videos/video-2.mp4";
const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src={Video} autoPlay loop muted></video>
      <h1>Adventure Awaits !!</h1>
      <p>What are you waiting for ?</p>
      <div className="hero-btns">
        <Button
          className="btn"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btn"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
