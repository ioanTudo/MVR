import { useEffect, useState } from "react";

const usePaginationMovies = () => {
  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [topRatedCurrentPage, setTopRatedCurrentPage] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const url = `https://api.themoviedb.org/3/discover/movie?page=${currentPage}`;
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
          throw new Error("No results found");
        }

        setList(() => [...list, ...data.results.slice(0, 14)]);
      } catch (error) {
        console.error("Trouble fetching movies:", error);
      }
    };

    fetchMovies();
  }, [currentPage]);

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const url = `https://api.themoviedb.org/3/movie/top_rated?page=${topRatedCurrentPage}`;
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
          throw new Error("No top-rated movies found");
        }

        setTopRatedMovies(() => [...topRatedMovies, ...data.results]);
      } catch (error) {
        console.error("Trouble fetching top-rated movies:", error);
      }
    };

    fetchTopRatedMovies();
  }, [topRatedCurrentPage]);

  const loadMore = () => {
    setCurrentPage(() => currentPage + 1);
    console.log("loadMore called, new page:", currentPage + 1);
  };

  const loadMoreTopRated = () => {
    setTopRatedCurrentPage(() => topRatedCurrentPage + 1);
    console.log("toprated called, new page:", topRatedCurrentPage + 1);
  };

  return {
    list,
    currentPage,
    loadMore,
    topRatedMovies,
    topRatedCurrentPage,
    loadMoreTopRated,
  };
};

export default usePaginationMovies;
