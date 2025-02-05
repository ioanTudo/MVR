import { useContext, useEffect } from "react";
import { TemplatePageDisplay } from "../template/TemplatePageDisplay";
import { FavouriteContext } from "../../contexts/contexts";
import "./FavMovie.css";
import { FavMoviesDisplay } from "./FavMoviesDisplay.jsx";

export const FavMoviesPage = ({ handleDelete }) => {
  const [favourite] = useContext(FavouriteContext);

  return (
    <TemplatePageDisplay>
      <div style={{ height: "100vh", overflow: "scroll" }}>
        <h1 style={{ textAlign: "center" }}>My list</h1>
        {favourite.length === 0 ? (
          <p>Your favourite list is empty.</p>
        ) : (
          favourite.map((fav, index) => (
            <FavMoviesDisplay
              key={index}
              title={fav.title}
              imageUrl={fav.imageUrl}
              moviePath={fav.title}
              id={fav.id}
              onDelete={() => handleDelete(fav.id)}
            />
          ))
        )}
      </div>
    </TemplatePageDisplay>
  );
};
