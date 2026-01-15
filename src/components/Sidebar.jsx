import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div style={sidebarStyle}>
      <h2 style={logoStyle}>⚡ Control</h2>

      <nav style={navStyle}>
        <NavLink to="/" style={linkStyle} activeStyle={activeStyle}>
          📊 Dashboard
        </NavLink>

        <NavLink to="/analytics" style={linkStyle} activeStyle={activeStyle}>
          📈 Analytics
        </NavLink>

        <NavLink to="/history" style={linkStyle} activeStyle={activeStyle}>
          🕘 History
        </NavLink>

        <NavLink to="/settings" style={linkStyle} activeStyle={activeStyle}>
          ⚙️ Settings
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;

/* STYLES */
const sidebarStyle = {
  width: "240px",
  minHeight: "100vh",
  background: "linear-gradient(180deg, #0b1220, #060b14)",
  padding: "1.5rem 1rem",
  boxShadow: "2px 0 15px rgba(0,0,0,0.5)"
};

const logoStyle = {
  color: "#fff",
  marginBottom: "2rem"
};

const navStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem"
};

const linkStyle = {
  color: "#9fb3c8",
  textDecoration: "none",
  padding: "0.6rem 0.8rem",
  borderRadius: "8px",
  fontSize: "0.95rem"
};

const activeStyle = {
  background: "#0e1a33",
  color: "#3bc9ff"
};
