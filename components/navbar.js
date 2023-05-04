const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top">
        <a className="navbar-brand" href="https://www.gregscode.com">
          Greg's Code
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#hello">
                Hello <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
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
