import { githubLink, linkedinLink } from "../../assets/linksContent"
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { linkStyle } from "../../assets/styles";

function Links() {
    return (
        <div>
            <a href={githubLink} target="_blank" style={linkStyle}><FaGithubSquare/></a>
            <a href={linkedinLink} target="_blank" style={linkStyle}><FaLinkedin/></a>
        </div>
    )
}

export default Links;