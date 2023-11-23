// src/App.jsx
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const container = {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      margin: '8rem',
    }

  return (
    <div style={container}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
