import { useEffect, useState } from "react";
import { Link } from "react-router";

import "./TrendingMovies.css";

export const TrendingMovieList = () => {
  const [trendingList, setTrendingList] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const url =
          "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

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

        if (!data.results) {
          throw new Error("No movies found");
        }
        setTrendingList(data.results);
      } catch (error) {
        console.error("Trouble fetching movies:", error);
      }
    };

    fetchTrendingMovies();
  }, []);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Trending Movies</h1>
      <div className="trending_container">
        {trendingList.map((movie) => (
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
        ))}
      </div>
    </>
  );
};
