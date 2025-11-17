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
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-movie" element={<AddMovie />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
      </main>
    </>
  );
}
