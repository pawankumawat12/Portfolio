import { Link } from "react-router-dom";
import "./Home.css";
import About from "../About/About";
import Details from "../Details/Details";
import ExpSkill from "../ExpSkill/ExpSkill";
import Project from "../Project/Project";

function Home() {
  return (
    <>
      <div className="hero-section" data-aos="fade-up">
        <div className="hero-text" data-aos="fade-right">
          <p>HELLO, MY NAME IS</p>
          <h1>Pawan Kumar</h1>
          <h2>Frontend React JS Developer</h2>

          <div className="contact-info" data-aos="fade-up">
            <div>
              <i className="fa-solid fa-envelope"></i>
              <Link
                target="_blank"
                to="https://mail.google.com/mail/?view=cm&fs=1&to=pawankumawat9009@gmail.com"
                className="email"
              >
                PAWANKUMAWAT9009@GMAIL.COM
              </Link>
            </div>
            <div>
              <i className="fa-solid fa-phone"></i>{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="tel:+917690939596"
                className="phone"
              >
                +91 7690939596{" "}
              </Link>
            </div>
          </div>
        </div>

        <div className="hero-image" data-aos="zoom-in">
          <img src="./img.jpg" alt="Pawan Kumar" />
        </div>
      </div>

      <div data-aos="fade-up">
        <About />
      </div>

      
      <div data-aos="fade-up">
        <Project />
      </div>
      <div data-aos="fade-left">
        <Details />
      </div>
      <div data-aos="fade-right">
        <ExpSkill />
      </div>
    </>
  );
}

export default Home;
