import Head from "next/head";
import Header from "@/components/header";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <>
      <Head>
        <title>Greg Hughes - Developer Portfolio</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, shrink-to-fit=no"
        />
      </Head>
      <Header />
      <main role="main" id="hello">
        <section className="summary">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-sm-12">
                <div className="code-grid">
                  <div id="code-screen">
                    <span className="s"></span>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 summary-info">
                <h1>Hello, World!</h1>
                <hr />
                <p>
                  My name is Greg Hughes and I am full stack web developer. I am
                  passionate about solving real world problems with fast and
                  intuitive web applications as a solution. What keeps me driven
                  is my natural curiosity to learn as much as I can, and put my
                  skills to the test in order to achieve the best results
                  possible. I strive to become a better web developer every day
                  that I can by keeping up with best practices and following new
                  modern architectures and paradigms.
                </p>
                <p>
                  Want to work together? I'm always open to starting new
                  projects, collaborating or just talking code!
                </p>
              </div>
            </div>
          </div>
        </section>
        <Projects />
        <section className="skills" id="skills">
          <div className="container">
            <div className="row text-center">
              <h1>Other Skills</h1>
              <hr />
              <ul className="other-skills">
                <li>Git/GitHub</li>
                <li>Bootstrap</li>
                <li>jQuery</li>
                <li>GraphQL</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="contact" id="contact">
          <div id="particles-js"></div>
          <div className="container text-center">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h3>Connect with me:</h3>
                <hr />
                <p>Want to get in touch? Don't be shy!</p>
              </div>
              <div className="social-container col-sm-12 col-md-6">
                <a href="mailto:gregsthings@gmail.com">
                  <i className="fas fa-envelope"></i>
                </a>
                <a href="https://github.com/GregHughes" target="_blank">
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/gregrichardhughes/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
