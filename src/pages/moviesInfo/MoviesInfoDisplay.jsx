import { useContext, useEffect } from "react";
import "./MovieInfo.css";
import { Comments } from "./Comments";
import { FavouriteContext } from "../../contexts/contexts";
import { useParams } from "react-router";

export const MoviesInfoDisplay = ({
  title,
  imageUrl,
  overview,
  release_date,
  id,
  genres,
}) => {
  const { movieId } = useParams();
  const [favourite, setFavourite] = useContext(FavouriteContext);

  useEffect(() => {
    try {
      const favMovies = JSON.parse(localStorage.getItem("savedFavs")) || [];
      setFavourite(favMovies);
    } catch (error) {
      console.error("Error parsing 'savedFavs' from localStorage:", error);
      setFavourite([]);
    }
  }, []);

  const handleAddToFav = () => {
    if (!favourite.find((movie) => movie.id === id)) {
      const updatedList = [...favourite, { id, title, imageUrl, overview }];
      setFavourite(updatedList);
      localStorage.setItem("savedFavs", JSON.stringify(updatedList));
    }
  };

  const handleDelete = (id) => {
    const updatedList = favourite.filter((movie) => movie.id !== id);
    setFavourite(updatedList);
    localStorage.removeItem("savedFavs", JSON.stringify(updatedList));
  };

  const isFavourite = favourite.some((movie) => movie.id === id);

  return (
    <div className="movie_wrapper">
      <div className="movieInfo_container">
        <div className="img_container">
          <img
            src={`https://image.tmdb.org/t/p/w500/${imageUrl}`}
            alt={title}
          />
        </div>
        <div className="info_container">
          <span>
            <strong>Title: </strong>
            {title}
          </span>
          <hr />
          <span>
            <strong>Info: </strong>
            {overview}
          </span>
          <hr />
          <span>
            <strong>Release Date: </strong>
            {release_date}
          </span>
          <hr />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <strong>Genres: </strong>
            {genres.map((gen, index) => (
              <div key={index}>
                <span>{gen.name}</span> |
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="addFav_container">
        <div className="btns_container">
          {isFavourite ? (
            <button
              className="delBtn buttonFav"
              onClick={() => handleDelete(id)}
            >
              Remove from Favorites
            </button>
          ) : (
            <button
              className="addToFavBtn buttonFav"
              onClick={() => handleAddToFav(id)}
            >
              Add to Favorites
            </button>
          )}
        </div>

        <div className="ratingAndComm_container">
          <Comments commId={movieId} />
        </div>
      </div>
    </div>
  );
};
