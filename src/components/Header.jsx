// src/components/Header.jsx
import Profile from "./sections/Profile";
import Navigation from "./sections/Navigation";
import Links from "./sections/Links";
import { useMediaQuery } from 'react-responsive'

function Header() {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1377 })
  const headerContainer = {
    width: "400px",
    height: "400px"
  }
  const header = {
    position: isTabletOrMobile ? "static" : "fixed",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '2rem',
    width: "400px",
    backgroundColor: 'white',
  }

  return (
    <div style={headerContainer}>
      <div style={header}>
        <Profile />
        <Navigation />
        <Links />
      </div>
    </div>
  );
}

export default Header;