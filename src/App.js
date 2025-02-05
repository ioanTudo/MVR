import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { MovieInfo } from "./pages/moviesInfo/MovieInfo.jsx";
import {
  CurrentPageContext,
  FavouriteContext,
  QueryContext,
} from "./contexts/contexts.jsx";
import { StrictMode, useState } from "react";
import { FavMoviesPage } from "./pages/FavMovies/FavMoviesPage.jsx";
import Home from "./pages/home/Home.jsx";

function App() {
  const favouriteContext = useState(
    JSON.parse(localStorage.getItem("savedFavs")) || []
  );
  const [query, setQuery] = useState("");

  return (
    <StrictMode>
      <QueryContext.Provider value={{ query, setQuery }}>
        <FavouriteContext.Provider value={favouriteContext}>
          <BrowserRouter basename="/technical-assignment">
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
    </StrictMode>
  );
}

export default App;
