import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { MovieInfo } from "./pages/moviesInfo/MovieInfo.jsx";
import {
  CurrentPageContext,
  FavouriteContext,
  QueryContext,
} from "./contexts/contexts.jsx";
import { useState } from "react";
import { FavMoviesPage } from "./pages/favMovies/FavMoviesPage.jsx";
import Home from "./pages/home/Home.jsx";

function App() {
  const favouriteContext = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");

  return (
    <CurrentPageContext.Provider value={{ currentPage, setCurrentPage }}>
      <QueryContext.Provider value={{ query, setQuery }}>
        <FavouriteContext.Provider value={favouriteContext}>
          <BrowserRouter basename="/MVR">
            <Routes>
              <Route index element={<Home />} />
              <Route
                path="/movies/:movieId/:movieName"
                element={<MovieInfo />}
              />
              <Route path="/fav-movies" element={<FavMoviesPage />} />
            </Routes>
          </BrowserRouter>
        </FavouriteContext.Provider>
      </QueryContext.Provider>
    </CurrentPageContext.Provider>
  );
}

export default App;
