import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_URL } from "../api/api";

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [movieLoading, setMovieLoading] = useState(true);

  const [reviews, setReviews] = useState([]);
  const [reviewsLoading, setReviewsLoading] = useState(true);

  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState(null);

  // Fetch movie
  useEffect(() => {
    setMovieLoading(true);
    fetch(`${API_URL}/movies/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        setMovieLoading(false);
      })
      .catch(() => setMovieLoading(false));
  }, [id]);

  // Fetch reviews
  const loadReviews = () => {
    setReviewsLoading(true);
    fetch(`${API_URL}/reviews/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setReviewsLoading(false);
      })
      .catch(() => setReviewsLoading(false));
  };

  useEffect(() => {
    loadReviews();
  }, [id]);

  // DELETE MOVIE
  const handleDeleteMovie = () => {
    if (!window.confirm("Are you sure you want to delete this movie?")) return;

    fetch(`${API_URL}/movies/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        alert("Movie deleted successfully.");
        navigate("/"); // redirect to home
      })
      .catch((err) => console.error(err));
  };

  // SUBMIT REVIEW
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    setStatus(null);

    if (!author || !comment || !rating) {
      setStatus({ type: "error", message: "All fields are required." });
      return;
    }

    fetch(`${API_URL}/reviews/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        author,
        rating: Number(rating),
        comment,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        setStatus({ type: "success", message: "Review added successfully." });
        setAuthor("");
        setRating(5);
        setComment("");
        loadReviews();
      })
      .catch(() =>
        setStatus({ type: "error", message: "Error adding review." })
      );
  };

  // DELETE REVIEW
  const handleDeleteReview = (reviewId) => {
    if (!window.confirm("Delete this review?")) return;

    fetch(`${API_URL}/reviews/${reviewId}`, {
      method: "DELETE",
    })
      .then(() => loadReviews())
      .catch((err) => console.error(err));
  };

  if (movieLoading) return <p>Loading movie...</p>;
  if (!movie) return <p>Movie not found.</p>;

  return (
    <div>
      <h1 className="page-title">{movie.title}</h1>

      <div className="card" style={{ marginBottom: "20px" }}>
        <p><strong>Year:</strong> {movie.year}</p>
        <p><strong>Genre:</strong> {movie.genre}</p>

        <button
          className="btn btn-danger"
          style={{ marginTop: "10px" }}
          onClick={handleDeleteMovie}
        >
          Delete Movie
        </button>
      </div>

      {/* Reviews */}
      <h2>Reviews</h2>

      {reviewsLoading ? (
        <p>Loading reviews...</p>
      ) : reviews.length === 0 ? (
        <p>No reviews yet for this movie.</p>
      ) : (
        reviews.map((review) => (
          <div key={review._id} className="card" style={{ marginBottom: "12px" }}>
            <p><strong>{review.author}</strong></p>
            <p>{"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}</p>
            <p>{review.comment}</p>

            <button
              className="btn btn-danger"
              onClick={() => handleDeleteReview(review._id)}
            >
              Delete review
            </button>
          </div>
        ))
      )}

      {/* Add review */}
      <h2>Add Review</h2>
      <form onSubmit={handleReviewSubmit} style={{ maxWidth: "420px" }}>
        <div className="form-group">
          <label>Name</label>
          <input
            className="input"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label>Rating (1–5)</label>
          <input
            className="input"
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Comment</label>
          <textarea
            className="textarea"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your review"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit Review
        </button>

        {status && (
          <p style={{ color: status.type === "success" ? "green" : "red" }}>
            {status.message}
          </p>
        )}
      </form>
    </div>
  );
}
