import React from "react";
import { Link } from "react-scroll";
import "./Header.css";
import { solar__skyscraper } from "../../assets/index";
// import SolarSystem from "../SolarSystem";

const Header = () => {
  return (
    <header id="header">
      {/* <div className="system__wrapper"><SolarSystem/></div> */}
      <div className="container full__height blur-effect">
        <div className="column">
          <h1 className="title">
            Revolutionary Home
            <span className="g-text">Solar System</span>
          </h1>
          <p className="text__muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sint
            vel iure iusto, temporibus quae veniam obcaecati quos consectetur.
            Necessitatibus animi eaque dolores earum dolorum quisquam quaerat,
            accusantium culpa. Eveniet!
          </p>
          <div className="buttons__container">
            <Link to="services" className="btn">
              Our Services
            </Link>
            <Link to="contact" className="btn btn__primary">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="column">
          <div className="image__container primary__effect">
            <img src={solar__skyscraper} alt="solarix" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
