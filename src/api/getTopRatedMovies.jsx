import { useEffect, useState } from "react";

const useTopRatedMovies = (currentPageProp) => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const fetchTopRated = async () => {
      try {
        const url = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${currentPageProp}`;
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

        setTopRatedMovies(() => [...topRatedMovies, ...data.results]);
      } catch (error) {
        console.error("Trouble fetching movies:", error);
      }
    };

    fetchTopRated();
  }, [currentPageProp]);

  return { topRatedMovies };
};

export default useTopRatedMovies;
