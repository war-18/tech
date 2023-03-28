import React from "react";
import "./Hero.css";
import hero from "../images/Hero.svg";
import bgtechno from "../images/bgtechno.svg";
import techno2k23 from "../images/techno2k23.svg";
import video from "../images/bg.webm";
// import abouthomerect from "../images/abouthomerect.svg";
const Hero = ({ reference, scrollToSection, next }) => {
  return (
    <div className="Hero" ref={reference}>
      <div className="video_bg">
        <video src={video} autoPlay={true} loop muted></video>
      </div>
      <div className="robothon"><h1 className="robothontext">ROBOTHON</h1></div>
      <div className="cadathon"><h1 className="robothontext">CADATHON</h1></div>
      <div className="braniac"><h1 className="robothontext">BRANIAC</h1></div>
      <div className="constructo"><h1 className="robothontext">CONSTRUCTO</h1></div>
      <div className="codothon"><h1 className="robothontext">CODOTHON</h1></div>
      <div className="about"><h1 className="robothontext">ABOUT</h1></div>
    

      <img src={bgtechno} className='bgtechno' alt="" />
      <img src={hero} className="bghero"  alt="Intro_logo" />
      <img src={techno2k23} alt=""  className="bgtechno2k23" />
    </div>
  );
};

export default Hero;