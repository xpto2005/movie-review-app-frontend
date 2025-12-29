import { useEffect, useState } from "react";
import { API_URL } from "../api/api";
import { Link } from "react-router-dom"; // Import for navigation between routes

export default function Home() {
  // Local state for list of movies and error handling
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  // Fetch movies from backend when the component mounts
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(`${API_URL}/movies`);
        if (!res.ok) throw new Error("Failed to fetch movies");
        const data = await res.json();
        setMovies(data); // Store movies in state
      } catch (err) {
        console.error("Error fetching movies:", err);
        setError(true); // Trigger error message
      }
    };

    fetchMovies();
  }, []);

  return (
    <div style={{ maxWidth: "800px", margin: "40px auto" }}>
      <h1>Movie List</h1>

      {/* Show error message if fetch failed */}
      {error && (
        <p style={{ color: "red" }}>Error loading movies.</p>
      )}

      {/* Show placeholder if no movies are returned */}
      {!error && movies.length === 0 && <p>No movies found.</p>}

      {/* Render movie cards */}
      {!error &&
        movies.map((movie) => (
          <div
            key={movie._id}
            className="card"
            style={{ marginBottom: "12px" }}
          >
            {/* Movie title as clickable link to movie details page */}
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
            {/* Display genre information */}
            <p style={{ marginTop: 4, color: "#4b5563" }}>
              Genre: {movie.genre || "N/A"}
            </p>
          </div>
        ))}
    </div>
  );
}
