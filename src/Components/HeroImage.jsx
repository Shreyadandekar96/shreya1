import React from "react";
import "./HeroImage.css";
import heroimage from "../assets/HeroImage.jpg";
import { Navbar } from "./Navbar";

export const HeroImage = () => {
  return (
    <div className="hero-container">

      {/* NAVBAR ON IMAGE */}
      <Navbar />

      {/* HERO IMAGE */}
      <img src={heroimage} alt="hero" className="heroimg" />

      {/* TEXT ON IMAGE */}
      <div className="hero-content">
        <p className="subheading"><i>Adventures</i></p>
        <h1 className="heading">Let yourself be impressed</h1>
        <button className="signup">Sign Up</button>
      </div>

    </div>
  );
};
