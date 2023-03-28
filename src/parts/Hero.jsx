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

      <div className="robothon"><a href="./#everobothon"><h1 className="robothontext">ROBOTHON</h1></a></div>
      <div className="cadathon"><a href="./#evecadathon"><h1 className="robothontext">CADATHON</h1></a></div>
      <div className="braniac"><a href="./#evebraniac"><h1 className="robothontext">BRANIAC</h1></a></div>
      <div className="constructo"><a href="./#eveconstructo"><h1 className="robothontext">CONSTRUCTO</h1></a></div>
      <div className="codothon"><a href="./#evecodothon"><h1 className="robothontext">CODOTHON</h1></a></div>
      <div className="about"><a href="./#eveabout"><h1 className="robothontext">ABOUT</h1></a></div>
    

    

      <img src={bgtechno} className='bgtechno' alt="" />
      <img src={hero} className="bghero"  alt="Intro_logo" />
      <img src={techno2k23} alt=""  className="bgtechno2k23" />
    </div>
  );
};

export default Hero;
