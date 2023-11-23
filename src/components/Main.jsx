// src/components/Main.jsx
import About from "./sections/About";
import Projects from "./sections/Projects";

function Main() {
  const container = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: '2rem',
    width: '50vw',
  }
  return (
    <div style={container}>
      <About />
      <Projects />
    </div>
  );
}

export default Main;