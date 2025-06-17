import "./Details.css";

function Details() {
  return (
    <>
      <section className="what-i-do-section" data-aos="fade-up">
        <div className="heading" data-aos="zoom-in">
          <h2>What I Do</h2>
          <p>
            As a Frontend Developer, I create beautiful, responsive, and
            interactive user interfaces using modern technologies.
          </p>
        </div>

        <div className="services">
          <div className="service-card" data-aos="fade-right">
            <div className="icon">
              <i className="fas fa-code"></i>
            </div>
            <h3>Web UI Development</h3>
            <p>
              Build pixel-perfect and mobile-friendly UIs with HTML, CSS, SCSS,
              and JavaScript using modern techniques.
            </p>
          </div>

          <div className="service-card" data-aos="zoom-in-up">
            <div className="icon">
              <i className="fab fa-react"></i>
            </div>
            <h3>React.js Development</h3>
            <p>
              Develop dynamic web apps with components, hooks, and state
              management using React.js and modern tooling.
            </p>
          </div>

          <div className="service-card" data-aos="fade-left">
            <div className="icon">
              <i className="fab fa-angular"></i>
            </div>
            <h3>Angular Projects</h3>
            <p>
              Build modular, scalable, and performant SPAs with Angular, RxJS,
              Angular Material, and component libraries.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Details;
