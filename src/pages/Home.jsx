import { useEffect, useState } from "react";
import { API_URL } from "../api/api.js";
import { Link } from "react-router-dom";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/movies`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1 className="page-title">Movies</h1>

      {loading ? (
        <p className="text-muted">Loading movies...</p>
      ) : movies.length === 0 ? (
        <p className="text-muted">No movies available.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {movies.map((movie) => (
            <li key={movie._id} className="card">
              <Link
                to={`/movies/${movie._id}`}
                style={{
                  textDecoration: "none",
                  fontSize: "18px",
                  color: "#111827",
                  fontWeight: 600,
                }}
              >
                {movie.title} ({movie.year})
              </Link>
              <p style={{ marginTop: 4, color: "#4b5563" }}>
                Genre: {movie.genre || "N/A"}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
