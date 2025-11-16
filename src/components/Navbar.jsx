import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        width: "100%",
        background: "#222",
        padding: "14px 30px",
        display: "flex",
        alignItems: "center",
        gap: "25px",
      }}
    >
      <Link to="/" style={{ color: "#fff", fontSize: "18px", textDecoration: "none" }}>
        Home
      </Link>

      <Link to="/add-movie" style={{ color: "#fff", fontSize: "18px", textDecoration: "none" }}>
        Add Movie
      </Link>
    </nav>
  );
}
