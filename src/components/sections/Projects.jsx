import Project from "./Project";
import projects from "./projectsContent";

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