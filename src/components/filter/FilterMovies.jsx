import { useContext, useEffect, useState } from "react";
import { useMovieGenres } from "../../api/useMovieGenres";
import "./FilterMovies.css";
import { Link } from "react-router-dom";
import { useMoviesList } from "../../api/useMovieList";
import { CurrentPageContext, QueryContext } from "../../contexts/contexts";
import { useSearch } from "../../api/useSearch";

export const FilterMovies = () => {
  const { currentPage, setCurrentPage } = useContext(CurrentPageContext);
  const [selectedGenre, setSelectedGenre] = useState("");
  const { genreList = [] } = useMovieGenres();
  const { movieList = [] } = useMoviesList(selectedGenre);
  const { query } = useContext(QueryContext);
  const { movieSearchList = [] } = useSearch(query, currentPage);
  const [list, setList] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  const [recentlyViewed, setRecentlyViewed] = useState(
    JSON.parse(localStorage.getItem("recentlyViewedMovies")) || []
  );

  const addToRecentlyViewed = (movie) => {
    setRecentlyViewed(() => {
      const updatedMovies = [
        ...recentlyViewed.filter((m) => m.id !== movie.id),
        movie,
      ].slice(-5);

      movieList.filter(
        (movie) =>
          recentlyViewed.includes(selectedGenre) &&
          !recentlyViewed.find((m) => m.id === movie.id)
      );
      localStorage.setItem(
        "recentlyViewedMovies",
        JSON.stringify(updatedMovies)
      );
      setRecommendedMovies(recommendedMovies);
      return updatedMovies;
    });
  };

  useEffect(() => {
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

    fetchMovies();
  }, [currentPage]);

  return (
    <>
      <h1>Discover movies</h1>
      <div className="genre_wrapper">
        <label htmlFor="genre-type">Genres</label>
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

      <div className="movies_wrapper">
        {(query ? movieSearchList : movieList).map((movie) => (
          <Link
            key={movie.id}
            className="linkToMovie"
            to={`/movies/${movie.id}/${movie.original_title}`}
            onClick={() => addToRecentlyViewed(movie)}
          >
            <div
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
              }}
              className="movie_container"
            >
              <div className="title_container">
                <span>{movie.original_title}</span>
              </div>
            </div>
          </Link>
        ))}
        {currentPage > 1
          ? list.map((item) => (
              <Link
                key={item.id}
                className="linkToMovie"
                to={`/movies/${item.id}/${item.original_title}`}
                onClick={() => addToRecentlyViewed(item)}
              >
                <div
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w500/${item.poster_path})`,
                  }}
                  className="movie_container"
                >
                  <div className="title_container">
                    <span>{item.original_title}</span>
                  </div>
                </div>
              </Link>
            ))
          : ""}
      </div>

      <div className="pagination_container">
        <button
          className="paginationBtn"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Load more
        </button>
      </div>
    </>
  );
};
