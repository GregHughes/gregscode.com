const ProjectList = ({ projectContent }) => {
  const techIconClass = {
    HTML: "devicon-html5-plain",
    CSS: "devicon-css3-plain",
    TAILWIND: "devicon-tailwindcss-plain",
    BOOTSTRAP: "devicon-bootstrap-plain",
    JAVASCRIPT: "devicon-javascript-plain",
    TYPESCRIPT: "devicon-typescript-plain",
    JQUERY: "devicon-jquery-plain",
    PHP: "devicon-php-plain",
    NODE: "devicon-nodejs-plain",
    WORDPRESS: "devicon-wordpress-plain",
    REACT: "devicon-react-original",
    SVELTE: "devicon-svelte-plain",
    "NEXT.JS": "devicon-nextjs-original",
    FIREBASE: "devicon-firebase-plain",
    POSTGRESQL: "devicon-postgresql-plain",
    OTHER: "fas fa-code",
  };

  return (
    <>
      {projectContent.map((project, i) => (
        <div className="project col-sm-12 col-md-6 col-lg-4" key={i}>
          <div className="card h-100">
            {(() => {
              if (project.isPortfolio) {
                return (
                  <a href={project.repo} target="_blank">
                    <div
                      className="ribbon-container"
                      data-ribbon-content="This Website"
                      data-ribbon-type="portfolio"
                    >
                      <img
                        src={project.image}
                        alt={"Screenshot of " + project.name}
                        className="card-img-top"
                      />
                    </div>
                  </a>
                );
              } else if (project.inProgress) {
                return (
                  <a href={project.url || project.repo} target="_blank">
                    <div
                      className="ribbon-container"
                      data-ribbon-content="Work In Progress"
                      data-ribbon-type="wip"
                    >
                      <img
                        src={project.image}
                        alt={"Screenshot of " + project.name}
                        className="card-img-top"
                      />
                    </div>
                  </a>
                );
              } else {
                return (
                  <a href={project.url || project.repo} target="_blank">
                    <img
                      src={project.image}
                      alt={"Screenshot of " + project.name}
                      className="card-img-top"
                    />
                  </a>
                );
              }
            })()}
            <div className="card-body">
              <h5 className="card-title">{project.name}</h5>
              <p className="card-text">{project.description}</p>
            </div>
            <h5 className="stack-title">Tech Stack</h5>
            <ul className="list-group list-group-horizontal">
              {project.webStack.map((tech, i) => (
                <li
                  className="list-group-item flex-fill tech-icon"
                  key={i}
                  title={tech}
                >
                  <i
                    className={
                      techIconClass[tech.toUpperCase()] ||
                      techIconClass["OTHER"]
                    }
                  ></i>
                  {tech}
                </li>
              ))}
            </ul>
            <div className="card-body card-links">
              {project.url != "" ? (
                <a href={project.url} target="_blank" className="card-link">
                  <i className="fas fa-server"></i>
                  Live
                </a>
              ) : (
                <a
                  className="card-link disabled-link"
                  title="Site Not Available"
                >
                  <i className="fas fa-server"></i>
                  Live
                </a>
              )}

              {project.repo != "" ? (
                <a href={project.repo} target="_blank" className="card-link">
                  <i className="fab fa-github"></i>
                  Source
                </a>
              ) : (
                <a
                  className="card-link disabled-link"
                  title="Source Not Available"
                >
                  <i className="fab fa-github"></i>
                  Source
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectList;
