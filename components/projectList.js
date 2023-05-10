const ProjectList = ({ projectContent }) => {
  const techIconClass = {
    HTML: "fab fa-html5",
    CSS: "fab fa-css3",
    JAVASCRIPT: "fab fa-js",
    PHP: "fab fa-php",
    NODE: "fab fa-node-js",
    WORDPRESS: "fab fa-wordpress",
    REACT: "fab fa-react",
    OTHER: "fas fa-code",
  };

  return (
    <>
      {projectContent.map((project, i) => (
        <div className="project col-sm-12 col-md-6 col-lg-4" key={i}>
          <div className="card h-100">
            {project.inProgress ? (
              <a href={project.url} target="_blank">
                <div
                  className="ribbon-container"
                  data-ribbon="Work In Progress"
                >
                  <img
                    src={project.image}
                    alt={"Screenshot of " + project.name}
                    className="card-img-top"
                  />
                </div>
              </a>
            ) : (
              <a href={project.url} target="_blank">
                <img
                  src={project.image}
                  alt={"Screenshot of " + project.name}
                  className="card-img-top"
                />
              </a>
            )}

            <div className="card-body">
              <h5 className="card-title">{project.name}</h5>
              <p className="card-text">{project.description}</p>
            </div>
            <h5 className="stack-title">Web Stack</h5>
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
                <a className="card-link disabled-link">
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
                <a className="card-link disabled-link">
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
