import { FaGithub } from "react-icons/fa";
import { linkStyle } from "../../assets/styles";

function Project({project}) {
    const { projectLink, githubLink, imageLink, title, description, style } = project;
    const imageLinkStyle = {
        gridArea: "imageLink",
    }
    const nameStyle = {
        gridArea: "name",
    }
    const descriptionStyle = {
        gridArea: "description",
    }
    const container = {
        margin: "1rem",
        display: "grid",
        gridTemplateAreas: `
            "imageLink name name"
            "imageLink description description"
            ". description description"
        `,
        gap: "0.5rem",
    }
    return (
        <div style={container}>
            <a href={projectLink} target="_blank" style={imageLinkStyle}><img src={imageLink} style={style}/></a>
            <div style={nameStyle}>
                <a href={projectLink} target="_blank" style={linkStyle}>{title}</a>  <a href={githubLink} target="_blank" style={linkStyle}><FaGithub/></a>
            </div>
            <div style={descriptionStyle}>{description}</div>
        </div>
    );
}

export default Project;