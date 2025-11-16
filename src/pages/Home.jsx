import { useEffect, useState } from "react";
import { API_URL } from "../api/api.js";
import { Link } from "react-router-dom";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/movies`)
      .then(res => res.json())
      .then(data => setMovies(data))
      .catch(err => console.error("Erro:", err));
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>Movies</h1>

      {movies.length === 0 ? (
        <p style={{ fontSize: "18px", opacity: 0.7 }}>No movies available.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {movies.map(movie => (
            <li
              key={movie._id}
              style={{
                padding: "12px 16px",
                marginBottom: "8px",
                background: "#f5f5f5",
                borderRadius: "6px",
              }}
            >
              <Link
                to={`/movies/${movie._id}`}
                style={{ textDecoration: "none", fontSize: "18px", color: "#222" }}
              >
                {movie.title} ({movie.year})
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
