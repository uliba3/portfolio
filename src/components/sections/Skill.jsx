function Skill({skill}) {
    const container = {
        border: "1px solid silver",
        borderRadius: "0.25rem",
        padding: "0.1rem",
        backgroundColor: "grey",
        color: "white",
    }
    return (
        <span style={container}> {skill} </span>
    );
}

export default Skill;