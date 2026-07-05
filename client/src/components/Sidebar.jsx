import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div style={styles.sidebar}>
      <h2 style={styles.logo}>ATM System</h2>

      <NavLink to="/dashboard" style={navStyle}>Dashboard</NavLink>
      <NavLink to="/atms" style={navStyle}>ATMs</NavLink>
      <NavLink to="/cash-status" style={navStyle}>Cash Status</NavLink>
      <NavLink to="/reports" style={navStyle}>Reports</NavLink>
      <NavLink to="/settings" style={navStyle}>Settings</NavLink>
    </div>
  );
}

const styles = {
  sidebar: {
    width: "220px",
    height: "100vh",
    background: "#0f172a",
    color: "#fff",
    padding: "20px",
    position: "fixed",
    display: "flex",
    flexDirection: "column"
  },
  logo: {
    marginBottom: "30px"
  }
};

const navStyle = ({ isActive }) => ({
  padding: "10px",
  marginBottom: "10px",
  color: isActive ? "#000" : "#fff",
  background: isActive ? "#38bdf8" : "transparent",
  textDecoration: "none",
  borderRadius: "6px"
});