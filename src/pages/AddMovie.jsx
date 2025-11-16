import { useState } from "react";
import { API_URL } from "../api/api";

export default function AddMovie() {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${API_URL}/movies`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, year, genre }),
    })
      .then(res => res.json())
      .then(() => {
        alert("Movie added!");
        setTitle("");
        setYear("");
        setGenre("");
      })
      .catch(err => console.log(err));
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ marginBottom: "20px" }}>Add Movie</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "350px",
          gap: "15px"
        }}
      >
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={inputStyle}
        />

        <input
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          style={inputStyle}
        />

        <input
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          style={inputStyle}
        />

        <button
          type="submit"
          style={{
            padding: "12px",
            background: "#222",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          Save Movie
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "15px",
};
