import { useState } from "react";
import { API_URL } from "../api/api";

export default function AddMovie() {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);

    const newMovie = {
      title,
      year: Number(year),  // 👈 CONVERTE PARA NÚMERO
      genre,
    };

    try {
      const response = await fetch(`${API_URL}/movies`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newMovie),
      });

      if (!response.ok) throw new Error("Failed to add movie");

      setSuccess(true);
      setTitle("");
      setYear("");
      setGenre("");
    } catch (err) {
      setError(true);
      console.error("Error adding movie:", err);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto" }}>
      <h1>Add Movie</h1>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div>
          <label>Year</label>
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div>
          <label>Genre</label>
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#0d172a",
            color: "white",
            border: "none",
            borderRadius: "6px",
          }}
        >
          Save Movie
        </button>
      </form>

      {success && <p style={{ color: "green", marginTop: "10px" }}>Movie added successfully!</p>}
      {error && <p style={{ color: "red", marginTop: "10px" }}>Error adding movie.</p>}
    </div>
  );
}
