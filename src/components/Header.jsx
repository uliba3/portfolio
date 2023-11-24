// src/components/Header.jsx
import Profile from "./sections/Profile";
import Navigation from "./sections/Navigation";
import Links from "./sections/Links";

function Header() {
  const header = {
    position: "fixed",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '2rem',
    width: '50vw',
  }

  return (
    <div>
      <div style={header}>
        <Profile />
        <Navigation />
        <Links />
      </div>
    </div>
  );
}

export default Header;