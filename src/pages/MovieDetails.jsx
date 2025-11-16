import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../api/api";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/movies/${id}`)
      .then(res => res.json())
      .then(data => setMovie(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!movie) return <p style={{ padding: "30px" }}>Loading...</p>;

  return (
    <div style={{ padding: "30px" }}>
      <h1>{movie.title}</h1>

      <p><strong>Year:</strong> {movie.year}</p>
      <p><strong>Genre:</strong> {movie.genre}</p>

      <p style={{ marginTop: "20px", opacity: 0.7 }}>
        Movie ID: {movie._id}
      </p>
    </div>
  );
}
