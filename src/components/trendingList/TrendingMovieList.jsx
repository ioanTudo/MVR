import { useEffect, useState } from "react";
import { Link } from "react-router";

export const TrendingMovieList = () => {
  const [trendingList, setTrendingList] = useState([]);
  const [recentlyViewed, setRecentlyViewed] = useState(
    JSON.parse(localStorage.getItem("recentlyViewedMovies")) || []
  );
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
  }, [recentlyViewed]);

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
  };
  return (
    <>
      <h1 style={{ textAlign: "left" }}>Trending Movies</h1>
      <div className="trending_container">
        {trendingList.map((movie) => (
          <div key={movie.id}>
            <Link
              onClick={() => addToRecentlyViewed(movie)}
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
