// App routes and layout
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddMovie from "./pages/AddMovie";
import MovieDetails from "./pages/MovieDetails";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      {/* Main content container */}
      <main className="app-main">
        <Routes>
          {/* Homepage with movie list */}
          <Route path="/" element={<Home />} />
          {/* Page to add a new movie */}
          <Route path="/add-movie" element={<AddMovie />} />
          {/* Page to view movie details and reviews */}
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
      </main>
    </>
  );
}

