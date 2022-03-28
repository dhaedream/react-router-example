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
            <p>
              Chocolate sweet roll gummi bears cheesecake gingerbread cookie
              pastry tart pie. Fruitcake powder topping bonbon toffee topping I
              love biscuit. Jelly beans I love cookie donut pie jelly.
            </p>
            <div className="used-by">
              <p>USED BY</p>
              <div className="icons">
                <i>
                  <FaDatabase /> Staxx
                </i>
                <i>
                  <FaAsterisk /> Star AI
                </i>
                <i>
                  <FaAccusoft /> Accusoft
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
