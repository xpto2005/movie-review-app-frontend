<<<<<<< HEAD
=======
// App routes and layout
>>>>>>> 677ba97 (docs: improve README with fixes, backend link and deployment notes)
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
<<<<<<< HEAD
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-movie" element={<AddMovie />} />
=======
      {/* Main content container */}
      <main className="app-main">
        <Routes>
          {/* Homepage with movie list */}
          <Route path="/" element={<Home />} />
          {/* Page to add a new movie */}
          <Route path="/add-movie" element={<AddMovie />} />
          {/* Page to view movie details and reviews */}
>>>>>>> 677ba97 (docs: improve README with fixes, backend link and deployment notes)
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
      </main>
    </>
  );
}
<<<<<<< HEAD
=======

>>>>>>> 677ba97 (docs: improve README with fixes, backend link and deployment notes)
