import Head from "next/head";
import Header from "@/components/header";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";

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
      <main role="main" data-target="hello">
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
        <Skills />
        <Contact />
      </main>
    </>
  );
}
