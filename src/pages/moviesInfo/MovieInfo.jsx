import { useParams } from "react-router";
import { MoviesInfoDisplay } from "./MoviesInfoDisplay.jsx";
import { TemplatePageDisplay } from "../../components/Templates/TemplatePage.jsx";
import useMovieInfo from "../../api/getMovieInfo.jsx";

export const MovieInfo = ({ handleDelete }) => {
  const { movieId } = useParams();
  const { movieInfo } = useMovieInfo(movieId);

  return (
    <TemplatePageDisplay>
      {movieInfo ? (
        <MoviesInfoDisplay
          id={movieInfo.id}
          title={movieInfo.title}
          imageUrl={movieInfo.poster_path}
          overview={movieInfo.overview}
          release_date={movieInfo.release_date}
          genres={movieInfo.genres}
          onDelete={() => handleDelete(movieInfo.id)}
        />
      ) : (
        <div>Movie not found</div>
      )}
    </TemplatePageDisplay>
  );
};
