import { linkStyle } from "../../assets/styles";

function Navigation () {
    return (
        <nav>
            <div><a href="#about" style={linkStyle}>-About</a></div>
            <div><a href="#projects" style={linkStyle}>-Projects</a></div>
        </nav>
    )
}

export default Navigation;