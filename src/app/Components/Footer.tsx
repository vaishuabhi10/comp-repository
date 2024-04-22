import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faSquareInstagram,
  faSquareTwitter,
  faSquareWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footerCont">
      <div className="heading">
        <h1 className="h1">About Anubandh</h1>
      </div>
      <span className="redLine"></span>
      <p className="para">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius vitae
        fuga ducimus, porro velit animi molestias doloribus totam sequi amet
        temporibus voluptates maiores. Amet incidunt facilis nemo aliquam
        repudiandae hic?
      </p>
      <div className="smedia">
        <div className="icon">
          <FontAwesomeIcon icon={faFacebook} color="white" />
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faSquareInstagram} color="white" />
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faSquareWhatsapp} color="white" />
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faSquareTwitter} color="white" />
        </div>
      </div>
      <div className="heading">
        <h1 className="h1">Quick Links</h1>
      </div>
      <span className="redLine"></span>
      <ul>
        <li>Home</li>
        <li>Why Us</li>
        <li>How it Works</li>
        <li>Premium Members</li>
        <li>About</li>
        <li>Tearms & Conditions</li>
        <li>Contact Us</li>
        <li>FAQs</li>
      </ul>
      <section className="contacts">
        <div className="heading">
          <h1 className="h1">Contacts</h1>
          <span className="redLine"></span>
        </div>
        <div className="contactsInfo">
          <FontAwesomeIcon icon={faLocationDot} style={{ color: "#d93134" }} />
          <span className="textStyle">
            404, Ved Vihar, Bhusari Colony Kothrud, Pune 411038
          </span>
        </div>
        <div className="contactsInfo">
          <FontAwesomeIcon icon={faPhone} style={{ color: "#d93134" }} />
          <span className="textStyle">
            +91 930 955 4954 (9 AM to 6 PM India time)
          </span>
        </div>
        <div className="contactsInfo">
          <FontAwesomeIcon icon={faEnvelope} style={{ color: "#d93134" }} />{" "}
          <span className="textStyle">info@anubandh.com</span>
        </div>
      </section>
      <span className="longRedLine"></span>
      <span className="copyright copyrightStyle">
        Copyright &#169; 2022 Destesk Infosolutions. All rights reserved.
      </span>
    </div>
  );
};

export default Footer;
