import { useParams } from "react-router";
import { TemplatePageDisplay } from "../template/TemplatePageDisplay";
import { useContext, useEffect, useState } from "react";
import { MoviesInfoDisplay } from "./MoviesInfoDisplay.jsx";
import { CurrentPageContext } from "../../contexts/contexts.jsx";

export const MovieInfo = ({ handleDelete }) => {
  const { movieId } = useParams();
  const { currentPage } = useContext(CurrentPageContext);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page${currentPage}&sort_by=popularity.desc`;
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
        setMovieList(data.results);
        console.log(data.results);
      } catch (error) {
        console.error("Trouble fetching movies:", error);
      }
    };

    fetchMovies();
  }, [movieId, currentPage]);

  const filterMovie = movieList.find((movie) => movie.id === parseInt(movieId));

  return (
    <TemplatePageDisplay>
      {filterMovie ? (
        <MoviesInfoDisplay
          id={filterMovie.id}
          title={filterMovie.title}
          imageUrl={filterMovie.poster_path}
          overview={filterMovie.overview}
          release_date={filterMovie.release_date}
          onDelete={() => handleDelete(filterMovie.id)}
        />
      ) : (
        <div>Movie not found</div>
      )}
    </TemplatePageDisplay>
  );
};
