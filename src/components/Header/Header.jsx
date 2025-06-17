import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import "./Header.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 700,
      offset: 100,
      once: true,
    });
  }, []);

  return (
    <header className="header" data-aos="fade-down">
      <div className="headercontainer">
        <h1 className="header__title">PK</h1>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <div className={isOpen ? "bar rotate1" : "bar"}></div>
          <div className={isOpen ? "bar fade" : "bar"}></div>
          <div className={isOpen ? "bar rotate2" : "bar"}></div>
        </div>

        <nav className={`headernav ${isOpen ? "show" : ""}`}>
          <ul className="headerlist">
            <li className="headeritem">
              <ScrollLink
                to="hero"
                smooth={true}
                duration={500}
                className="headerlink"
                onClick={() => setIsOpen(false)}
              >
                Home
              </ScrollLink>
            </li>
            <li className="headeritem">
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                className="headerlink"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </ScrollLink>
            </li>
            <li className="headeritem">
              <ScrollLink
                to="skills"
                smooth={true}
                duration={500}
                className="headerlink"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </ScrollLink>
            </li>
            <li className="headeritem">
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="headerlink"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </ScrollLink>
            </li>
            <li className="headeritem">
              <ScrollLink
                to="blog"
                smooth={true}
                duration={500}
                className="headerlink"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </ScrollLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
