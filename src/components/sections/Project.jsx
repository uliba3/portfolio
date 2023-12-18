import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { linkStyle } from "../../assets/styles";
import Skills from "./Skills";

function Project({project}) {
    const [isHover, setIsHover] = useState(false);
    const { projectLink, githubLink, imageLink, title, description, style, skills } = project;
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
        padding: "1rem",
        margin: "1rem",
        display: "grid",
        gridTemplateAreas: `
            "imageLink name name"
            "imageLink description description"
        `,
        gap: "0.5rem",
        boxShadow: isHover ? "rgba(0, 0, 0, 0.35) 0px 5px 15px" : "none",
    }
    return (
        <div style={container} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <a href={projectLink} target="_blank" style={imageLinkStyle}><img src={imageLink} style={style} /></a>
            <div style={nameStyle}>
                <a href={projectLink} target="_blank" style={linkStyle}>{title}</a>  <a href={githubLink} target="_blank" style={linkStyle}><FaGithub/></a>
            </div>
            <div style={descriptionStyle}>
                {description}
                <Skills skills={skills}/>
            </div>
        </div>
    );
}

export default Project;