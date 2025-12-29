// Navigation bar component
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  // Apply style to active link
  const linkStyle = (path) => ({
    color: "#fff",
    fontSize: "18px",
    textDecoration: "none",
    fontWeight: location.pathname === path ? "700" : "500",
    borderBottom:
      location.pathname === path ? "2px solid #fff" : "2px solid transparent",
    paddingBottom: "2px",
  });

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <span className="navbar-logo">🎬 Movie Review App</span>
        <div className="navbar-links">
          <Link to="/" style={linkStyle("/")}>
            Home
          </Link>
          <Link to="/add-movie" style={linkStyle("/add-movie")}>
            Add Movie
          </Link>
        </div>
      </div>
    </nav>
  );
}
