const Navbar = () => {
  const scrollTo = (e) => {
    e.preventDefault();
    const el = document.querySelector(
      "[data-target=" + e.target.dataset.scroll + "]"
    );
    el.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top">
        <a className="navbar-brand" href="https://www.gregscode.com">
          Greg's Code
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href=""
                data-scroll="hello"
                onClick={scrollTo}
              >
                Hello <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href=""
                data-scroll="projects"
                onClick={scrollTo}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href=""
                data-scroll="skills"
                onClick={scrollTo}
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href=""
                data-scroll="contact"
                onClick={scrollTo}
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="resources/greg_hughes.pdf"
                download="greg_hughes"
              >
                Resume
                <i className="fas fa-download" id="resume-download-button"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
