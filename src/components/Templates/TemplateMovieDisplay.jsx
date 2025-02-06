import { Link } from "react-router-dom";
import "./TemplateMoviesDisplay.css";
import useRecommendedMovieAndRecently from "../Hooks/useRecommendedMovie";
import Pagination from "../Pagination/Pagination";

export const TemplateMovieDisplay = ({
  title,
  movieType = [],
  isTrending = false,
  isReccomendedAndRecentlyViewed = false,
  isDiscover = false,
  isLoadMore = false,
  isTopRated = false,
  handleAddToReccomendAndRecently,
  currentPage,
  topRatedCurrentPage,
  totalPages,
  loadMore,
}) => {
  const { setRecentlyViewed, setRecommended } =
    useRecommendedMovieAndRecently();

  const addToRecentlyViewed = (movie) => {
    setRecentlyViewed((prevRecentlyViewed) => {
      const updatedMovies = [
        ...prevRecentlyViewed.filter((m) => m.id !== movie.id),
        movie,
      ].slice(-10);
      localStorage.setItem(
        "recentlyViewedMovies",
        JSON.stringify(updatedMovies)
      );
      return updatedMovies;
    });

    setRecommended((prevRecommended) => {
      const updatedRecommended = [
        ...prevRecommended.filter((m) => m.id !== movie.id),
        movie,
      ].slice(-10);
      localStorage.setItem(
        "recommendedMovies",
        JSON.stringify(updatedRecommended)
      );
      return updatedRecommended;
    });
  };

  return (
    <div className="movie_display_wrapper">
      <h1 style={{ textAlign: "left" }}>{title}</h1>

      <div className="movies_container">
        {movieType.length === 0 ? (
          <p>No movies available</p>
        ) : (
          movieType.map((movie, index) => (
            <div key={index} className="movie_item">
              <Link
                onClick={() => addToRecentlyViewed(movie)}
                className="linkToMovie"
                to={`/movies/${movie.id}/${
                  movie.original_title || movie.imageUrl
                }`}
              >
                <div
                  style={{
                    backgroundImage: movie.imageUrl
                      ? `url(https://image.tmdb.org/t/p/w500/${movie.imageUrl})`
                      : `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
                  }}
                  className="movie_container"
                >
                  <div className="title_container">
                    <span>{movie.original_title}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
