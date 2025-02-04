import { useParams } from "react-router";
import { TemplatePageDisplay } from "../template/TemplatePageDisplay";
import { useEffect, useState } from "react";
import { MoviesInfoDisplay } from "./MoviesInfoDisplay.jsx";

export const MovieInfo = ({ handleDelete }) => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
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
        setMovie(data);
        console.log(data);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [movieId]);

  if (loading) {
    return <h1>loading..</h1>;
  }

  return (
    <TemplatePageDisplay>
      {movie ? (
        <MoviesInfoDisplay
          id={movie.id}
          title={movie.title}
          imageUrl={movie.poster_path}
          overview={movie.overview}
          release_date={movie.release_date}
          genres={movie.genres}
          onDelete={() => handleDelete(movie.id)}
        />
      ) : (
        <div>Movie not found</div>
      )}
    </TemplatePageDisplay>
  );
};
