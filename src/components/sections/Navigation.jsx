import NavigationLink from "./NavigationLink";

function Navigation () {
    return (
        <nav style={{height:"48px"}}>
            <NavigationLink link="#about" name="About" />
            <NavigationLink link="#projects" name="Projects" />
        </nav>
    )
}

export default Navigation;