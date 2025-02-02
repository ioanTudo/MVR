import { useContext } from "react";
import "./MovieInfo.css";
import { Comments } from "./Comments";
import { CurrentPageContext, FavouriteContext } from "../../contexts/contexts";

export const MoviesInfoDisplay = ({
  title,
  imageUrl,
  overview,
  release_date,
  id,
}) => {
  const [favourite, setFavourite] = useContext(FavouriteContext);
  const handleAddToFav = () => {
    console.log(favourite);
    setFavourite([...favourite, { id, title, imageUrl, overview }]);
  };

  const handleDelete = (indexMovie) => {
    const newList = favourite.filter((item) => item.id !== indexMovie);
    setFavourite(newList);
  };
  const filterMovie = Array.isArray(favourite)
    ? favourite.find((movie) => movie.id === parseInt(id))
    : null;
  return (
    <div className="movie_wrapper">
      <div className="movieInfo_container">
        <div className="img_container">
          <img
            src={` https://image.tmdb.org/t/p/w500/${imageUrl}`}
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
            <strong>
              Release Date: <br />
            </strong>
            {release_date}
          </span>
        </div>
      </div>
      <div className="addFav_container">
        <div className="btns_container">
          {filterMovie ? (
            <button onClick={() => handleDelete(id)}>remove from list</button>
          ) : (
            <button onClick={handleAddToFav}>add to favorites</button>
          )}
        </div>

        <div className="ratingAndComm_container">
          <Comments />
        </div>
      </div>
    </div>
  );
};
