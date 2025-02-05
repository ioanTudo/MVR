import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./RecentlyViewed.css";

export const RecentlyViewedComponent = () => {
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  useEffect(() => {
    try {
      const movies =
        JSON.parse(localStorage.getItem("recentlyViewedMovies")) || [];
      if (movies) {
        setRecentlyViewed(movies);
      } else {
        setRecentlyViewed([]);
      }
    } catch (error) {
      console.error(
        "Error parsing 'recentlyViewedMovies' from localStorage:",
        error
      );
      setRecentlyViewed([]);
    }
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "left" }}>Recently viewed</h1>
      <div className="recentlyViewed_container">
        {recentlyViewed.length === 0 ? (
          <p>No recently viewed movies</p>
        ) : (
          recentlyViewed.map((movie) => (
            <div key={movie.id}>
              <Link
                className="linkToMovie"
                to={`/movies/${movie.id}/${movie.original_title}`}
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
            </div>
          ))
        )}
      </div>
    </>
  );
};
