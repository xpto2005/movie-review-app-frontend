import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ background: "#333", padding: "10px" }}>
      <Link to="/" style={{ color: "white", marginRight: "15px" }}>Home</Link>
      <Link to="/add-movie" style={{ color: "white" }}>Add Movie</Link>
    </nav>
  );
}
