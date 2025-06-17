import "./Project.css";
import {Link} from 'react-router-dom';
function Project() {
  return (
    <div className="project-section" data-aos="fade-up">
      <h1 className="project-heading" data-aos="fade-up">
        Projects
      </h1>
    <Link to="https://organic-food-fronted.vercel.app/" className="data" target="_blank">
      <div className="project-wrapper">
        <div className="cardProject" data-aos="zoom-in">
          <h2 className="project-title">Organic Food</h2>
        </div>

        <div className="project-description-box" data-aos="fade-up">
          Responsive organic store with clean UI and smooth user experience.
        </div>
      </div>
      </Link>
    </div>
  );
}

export default Project;
