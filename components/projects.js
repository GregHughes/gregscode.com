import projectContent from "@/src/projectContent";
import ProjectList from "./projectList";

const Projects = () => {
  return (
    <>
      <section className="projects" data-target="projects">
        <div className="container">
          <div className="row text-center">
            <div className="col-sm-12">
              <h1>Projects</h1>
              <p>
                Below you will find some of the websites and applications that
                I've either built entirely or contributed to in the past.
              </p>
              <hr />
            </div>
            <ProjectList projectContent={projectContent} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
