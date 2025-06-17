import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ExpSkill.css";

function ExpSkill() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="exp-skill-container">
      <div className="skills-section" data-aos="fade-right">
        <h2 className="section-title">Skills</h2>
        <div className="skill">
          <span>React JS</span>
          <div className="progress-bar">
            <div style={{ width: "90%" }}>90%</div>
          </div>
        </div>
        <div className="skill">
          <span>JavaScript</span>
          <div className="progress-bar">
            <div style={{ width: "85%" }}>85%</div>
          </div>
        </div>
        <div className="skill">
          <span>HTML & CSS | SCSS</span>
          <div className="progress-bar">
            <div style={{ width: "95%" }}>95%</div>
          </div>
        </div>
        <div className="skill">
          <span>Responsive Design</span>
          <div className="progress-bar">
            <div style={{ width: "80%" }}>80%</div>
          </div>
        </div>
        <div className="skill">
          <span>Version Control (Git)</span>
          <div className="progress-bar">
            <div style={{ width: "75%" }}>75%</div>
          </div>
        </div>
      </div>

      <div className="experience-section" data-aos="fade-left">
        <h2 className="section-title">My Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot-container">
              <div className="timeline-dot"></div>

              <div className="timeline-date">2024–2025</div>
            </div>
            <div className="timeline-content">
              <h3>Frontend React JS Developer</h3>
              <p>Internship at Autovyn Consultancy Private Limited Tech</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpSkill;
