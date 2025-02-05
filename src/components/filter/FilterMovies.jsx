import { useCallback, useContext, useState } from "react";
import { useMovieGenres } from "../../api/useMovieGenres";
import "./FilterMovies.css";
import { Link } from "react-router-dom";
import { FavouriteContext, QueryContext } from "../../contexts/contexts";
import { useSearch } from "../../api/useSearch";
import { RecentlyViewedComponent } from "../recentlyViewed/RecentlyViewedComponent";
import { TrendingMovieList } from "../TrendingList/TrendingMovieList.jsx";
import { RecommendedMoviesComponent } from "../RecommendedMovies/RecommendedMovies.jsx";

export const FilterMovies = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState("");
  const { genreList = [] } = useMovieGenres();
  const { query } = useContext(QueryContext);
  const { movieSearchList = [] } = useSearch(query, currentPage, selectedGenre);
  const [list, setList] = useState([]);
  const [favourite, setFavourite] = useContext(FavouriteContext);

  const [recentlyViewed, setRecentlyViewed] = useState(
    JSON.parse(localStorage.getItem("recentlyViewedMovies")) || []
  );
  const [recommended, setRecommended] = useState(
    JSON.parse(localStorage.getItem("recommendedMovies")) || []
  );

  const addToRecentlyViewed = (movie) => {
    setRecentlyViewed(() => {
      const updatedMovies = [
        ...recentlyViewed.filter((m) => m.id !== movie.id),
        movie,
      ].slice(-10);

      localStorage.setItem(
        "recentlyViewedMovies",

        JSON.stringify(updatedMovies)
      );
    });
    setRecommended(() => {
      const reccMovies = [
        ...recommended.filter((m) => m.id !== movie.genre_ids),
        movie,
      ].slice(-10);

      localStorage.setItem("recommendedMovies", JSON.stringify(reccMovies));
    });
  };

  const fetchMovies = async () => {
    try {
      const url = `https://api.themoviedb.org/3/discover/movie?page=${
        currentPage + 1
      }`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjE0YzM1YzU0ZDJjZDM4Yzk0NjkwY2UzMDI3MDk0ZSIsIm5iZiI6MTczODA5MzczMy41MjcsInN1YiI6IjY3OTkzNGE1MWJlMTE2NDA5YzIzODk4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nTebm3iPBrMjCJcgW-ZUykU1iF95u99wfUTXy5g9Y4M",
        },
      };

      const response = await fetch(url, options);
      const data = await response.json();

      if (!data.results) throw new Error("No results found");

      setList([...list, ...data.results.slice(0, 16)]);

      console.log("Fetched movies:", data.results);
    } catch (error) {
      console.error("Trouble fetching movies:", error);
    }
  };
  const handleNextPage = async (pageNo) => {
    await fetchMovies(pageNo);
    setCurrentPage(pageNo);
  };
  useCallback(() => {
    fetchMovies(currentPage);
  });

  return (
    <div>
      <div className="filter_title_container">
        <h1>Discover movies</h1>
        <div className="genre_wrapper">
          <select
            name="genre-type"
            id="genre-type"
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            <option value="">Select a genre</option>
            {genreList.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="movies_wrapper">
        {movieSearchList.map((itm) => (
          <div key={itm.id}>
            <Link
              onClick={() => addToRecentlyViewed(itm)}
              className="linkToMovie"
              to={`/movies/${itm.id}/${itm.original_title}`}
            >
              <div
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/w500/${itm.poster_path})`,
                }}
                className="movie_container"
              >
                <div className="title_container">
                  <span>{itm.original_title}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
        <div className="pagination_container">
          <button
            className="paginationBtn"
            onClick={() => handleNextPage(currentPage + 1)}
          >
            Load more
          </button>
        </div>
      </div>
      <div className="wrapper_components">
        <RecentlyViewedComponent />
        <TrendingMovieList />
        <RecommendedMoviesComponent />
      </div>
    </div>
  );
};
