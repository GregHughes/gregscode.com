const Header = () => {
  const scrollTo = (e) => {
    e.preventDefault();
    const el = document.querySelector("[data-target=hello]");
    el.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };

  return (
    <header className="main-header">
      <div className="container">
        <div className="main-header-title">
          <span id="typed-content"></span>
        </div>
        <div className="main-header-content">
          <h2>Greg Hughes - Full Stack Engineer</h2>
          <p>Lover of all things JavaScript and React &#128640;</p>
        </div>
        <a href="" onClick={scrollTo}>
          <i className="fas fa-chevron-down fa-3x swing"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
