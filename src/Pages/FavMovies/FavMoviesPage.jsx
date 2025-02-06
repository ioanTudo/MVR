import { useContext } from "react";
import { TemplatePageDisplay } from "../../Components/Templates/TemplatePage.jsx";
import { FavouriteContext } from "../../Contexts/Contexts.jsx";
import "../../Components/Movies/Movies.css";

import "./FavMovie.css";
import { TemplateMovieDisplay } from "../../Components/Templates/TemplateMovieDisplay.jsx";

export const FavMoviesPage = () => {
  const [favourite, setFavourite] = useContext(FavouriteContext);

  return (
    <TemplatePageDisplay>
      <div className="favMovie_bigWrapper">
        <h1 style={{ textAlign: "center" }}>My list</h1>
        <div className="movie_display_wrapper">
          <div className="movies_wrapper">
            <TemplateMovieDisplay movieType={favourite} />
          </div>
        </div>
      </div>
    </TemplatePageDisplay>
  );
};
