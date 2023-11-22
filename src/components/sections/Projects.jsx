import Project from "./Project";
import projects from "../../content";

function Projects() {
    return (
        <div>
            {projects.map((project) => (
                <Project name={project.title} description={project.description} />
            ))}
        </div>
    );
}

export default Projects;