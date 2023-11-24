import Project from "./Project";
import projects from "../../assets/projectsContent";

function Projects() {
    return (
        <div id="projects">
            {projects.map((project, i) => (
                <Project key={i} project={project}/>
            ))}
        </div>
    );
}

export default Projects;