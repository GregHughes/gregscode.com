const Contact = () => {
  return (
    <section className="contact" data-target="contact">
      <div id="particles-js"></div>
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h3>Connect with me:</h3>
            <hr />
            <p>Want to get in touch? Don't be shy!</p>
          </div>
          <div className="social-container col-sm-12 col-md-6">
            <a href="mailto:gregsthings@gmail.com" title="Email">
              <i className="fas fa-envelope"></i>
            </a>
            <a
              href="https://github.com/GregHughes"
              target="_blank"
              title="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/gregrichardhughes/"
              target="_blank"
              title="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="resources/greg_hughes.pdf"
              download="greg_hughes"
              title="Resume"
            >
              <i className="fas fa-download"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
