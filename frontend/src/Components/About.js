import React from "react";
import {Link} from 'react-router-dom'
export default function About() {

  const aboutStyle = {
    textAlign: "center",
    color: "white",
    background: "linear-gradient(45deg, black, #17A589)",
    padding: "70px 0",
  };

  const learnMoreStyle = {
    color: "white",
    textDecoration: "none",
    padding: "2px 10px",
    border: "2px solid #fff",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
    marginTop: "12px",
    display: "inline-block",
  };

  return (
    <div className="px-2" style={aboutStyle}>
      <h2>About Us</h2>
      <p>
        RailHealth is a platform that provides health-based facilities to the passengers travelling by the train. We provide you with the complete set of health
        services while you are on a train journey. We also facilitate customers with other necessary services which include Direct Medicine order, Online Doctor consultancy and much more.
      </p>
      <div style={learnMoreStyle} sectionId="contactSection">
        LEARN MORE
      </div>
    </div>
  );
}
