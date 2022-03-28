import React from "react";
import {
  FaDatabase,
  FaAsterisk,
  FaAccusoft,
  FaFacebook,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="cntent">
          <div className="col-1">
            <h1>Data to enrich your</h1>
            <h1>
              <span className="primary-color">online business</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
