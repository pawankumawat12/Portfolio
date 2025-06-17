import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer" data-aos="fade-up">
      <div className="footer-container">
        <div className="footer-left" data-aos="fade-right">
          <h3>Based in India, working worldwide.</h3>
          <h1>
            <span className="underline-animation">Get in touch</span>
          </h1>
        </div>

        <div className="footer-right" data-aos="fade-left">
          <div className="footer-section">
            <h4>Social</h4>
            <ul>
              <li>
                <Link
                  target="_blank"
                  to="https://www.instagram.com/pawan__kumar9727/"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  to="https://www.linkedin.com/in/pawan-k-b013a9315/"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>
                <span className="footer-link-text">UI/UX Design</span>
              </li>
              <li>
                <span className="footer-link-text">Web Development</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Pawan Kumar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
