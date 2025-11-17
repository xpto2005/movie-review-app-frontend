import { useState } from "react";
import { API_URL } from "../api/api";

export default function AddMovie() {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(null);

    if (!title || !year || !genre) {
      setStatus({ type: "error", message: "All fields are required." });
      return;
    }

    fetch(`${API_URL}/movies`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, year: Number(year), genre }),
    })
      .then((res) => res.json())
      .then(() => {
        setStatus({ type: "success", message: "Movie added successfully." });
        setTitle("");
        setYear("");
        setGenre("");
      })
      .catch(() => {
        setStatus({ type: "error", message: "Error adding movie." });
      });
  };

  return (
    <div>
      <h1 className="page-title">Add Movie</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: "380px" }}>
        <div className="form-group">
          <label className="form-label">Title</label>
          <input
            className="input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Movie title"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Year</label>
          <input
            className="input"
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="e.g. 2010"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Genre</label>
          <input
            className="input"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            placeholder="e.g. Sci-Fi"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Save Movie
        </button>

        {status && (
          <p
            style={{
              marginTop: "10px",
              color: status.type === "success" ? "green" : "red",
            }}
          >
            {status.message}
          </p>
        )}
      </form>
    </div>
  );
}
