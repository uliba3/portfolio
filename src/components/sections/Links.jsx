import { emailLink, githubLink, linkedinLink } from "../../assets/linksContent"
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { linkStyle } from "../../assets/styles";

function Links() {
    const style = {
        ...linkStyle,
        fontSize: '32px',
    };
    return (
        <div>
            <div>
                <a href={githubLink} target="_blank" style={style}><FaGithubSquare/></a>
                <a href={linkedinLink} target="_blank" style={style}><FaLinkedin/></a>
            </div>
            <a href={emailLink} style={linkStyle}>yasoo8449@gmail.com</a>
        </div>
    )
}

export default Links;