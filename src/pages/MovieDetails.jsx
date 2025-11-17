import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_URL } from "../api/api";

export default function MovieDetails() {
  const { id } = useParams();
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
      .catch((err) => {
        console.error(err);
        setMovieLoading(false);
      });
  }, [id]);

  // Fetch reviews
  const loadReviews = () => {
    setReviewsLoading(true);
    fetch(`${API_URL}/reviews?movie=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setReviewsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setReviewsLoading(false);
      });
  };

  useEffect(() => {
    loadReviews();
  }, [id]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    setStatus(null);

    if (!author || !comment || !rating) {
      setStatus({ type: "error", message: "All fields are required." });
      return;
    }

    fetch(`${API_URL}/reviews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        movie: id,
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

  const handleDeleteReview = (reviewId) => {
    if (!window.confirm("Delete this review?")) return;

    fetch(`${API_URL}/reviews/${reviewId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        loadReviews();
      })
      .catch((err) => console.error(err));
  };

  if (movieLoading) {
    return <p className="text-muted">Loading movie...</p>;
  }

  if (!movie) {
    return <p className="text-muted">Movie not found.</p>;
  }

  return (
    <div>
      <h1 className="page-title">{movie.title}</h1>

      <div className="card" style={{ marginBottom: "20px" }}>
        <p>
          <strong>Year:</strong> {movie.year}
        </p>
        <p>
          <strong>Genre:</strong> {movie.genre || "N/A"}
        </p>
        <p className="text-muted" style={{ marginTop: "6px" }}>
          Movie ID: {movie._id}
        </p>
      </div>

      {/* Reviews list */}
      <h2 className="section-title">Reviews</h2>

      {reviewsLoading ? (
        <p className="text-muted">Loading reviews...</p>
      ) : reviews.length === 0 ? (
        <p className="text-muted">No reviews yet for this movie.</p>
      ) : (
        <div style={{ marginBottom: "20px" }}>
          {reviews.map((review) => (
            <div key={review._id} className="card">
              <p>
                <strong>{review.author}</strong>
                <span className="stars">
                  {"★".repeat(review.rating)}{" "}
                  {"☆".repeat(5 - review.rating)}
                </span>
              </p>
              <p style={{ marginTop: "6px" }}>{review.comment}</p>
              <button
                className="btn btn-danger"
                style={{ marginTop: "8px" }}
                onClick={() => handleDeleteReview(review._id)}
              >
                Delete review
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Add review */}
      <h2 className="section-title">Add Review</h2>

      <form onSubmit={handleReviewSubmit} style={{ maxWidth: "420px" }}>
        <div className="form-group">
          <label className="form-label">Author</label>
          <input
            className="input"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Your name"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Rating (1–5)</label>
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
          <label className="form-label">Comment</label>
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
