import Skill from "./Skill";

function Skills({skills}) {
    const container = {
        display: "flex",
        justifyContent: "flex-start",
        gap: "0.5rem",
    }
    return (
        <div style={container}>
            {skills.map((skill, i) => (
                <Skill key={i} skill={skill}/>
            ))}
        </div>
    );
}

export default Skills;