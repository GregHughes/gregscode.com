const Footer = () => {
  return (
    <>
      <footer className="main-footer">
        <div className="container">
          <div className="row">
            <div className="footer-content col-sm-12 col-lg-8">
              <h3>About Greg</h3>
              <p>
                I first started learning how to code when I was just a sophomore
                in High School after I discovered WordPress and the world of
                content management systems. When I was younger, I used to wonder
                how The Internet worked and how information was displayed on
                your screen almost like magic. That curiosity later fueled my
                ambition to teach myself the basics of HTML, CSS and WordPress.
              </p>
              <p>
                Now almost a decade later, after having received a Web
                Fundamentals Certificate and an AA degree in Digital Media: Web
                and Multimedia from Santa Rosa Junior College, my curiosity has
                pushed me to discover even more about modern web development.
                Some of the technology that I enjoy using and learning about
                currently are React, Next,js, Prisma, PostgreSQL and TypeScript.
              </p>
            </div>
            <div className="col-sm-12 col-lg-4">
              <h3>Info:</h3>
              <div className="footer-contact">
                <i className="fas fa-map-marker-alt"></i>
                <p>Location: San Francisco Bay Area</p>
              </div>
              <div className="footer-contact">
                <i className="fas fa-envelope"></i>
                <p>Email: gregsthings@gmail.com</p>
              </div>
              <div className="footer-contact">
                <i className="fab fa-github"></i>
                <p>
                  The source code for this website is available at{" "}
                  <a
                    href="https://github.com/GregHughes/gregscode"
                    target="_blank"
                  >
                    GitHub.com
                  </a>
                </p>
              </div>
            </div>
            <div className="col-sm-12 text-center">
              <p id="copyright"></p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
