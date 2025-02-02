import { useEffect, useState } from "react";

export const useSearch = (query, currentPageProp) => {
  const [movieSearchList, setMovieSearchList] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const url = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=${currentPageProp}&query=${query}`;
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
        setMovieSearchList(data.results);
        console.log(data.results);
      } catch (error) {
        console.error("Trouble fetching movies:", error);
      }
    };

    fetchMovies();
  }, [currentPageProp, query]);

  return { movieSearchList };
};
