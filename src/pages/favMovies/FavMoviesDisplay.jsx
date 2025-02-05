import { useContext } from "react";
import { Link } from "react-router";
import { FavouriteContext } from "../../contexts/contexts";

export const FavMoviesDisplay = ({ title, imageUrl, moviePath, id }) => {
  const [favourite, setFavourite] = useContext(FavouriteContext);

  const handleDelete = (id) => {
    const updatedList = favourite.filter((movie) => movie.id !== id);
    setFavourite(updatedList);
    localStorage.removeItem("savedFavs", JSON.stringify(updatedList));
  };

  return (
    <>
      <div className="favMovie_wrapper">
        <div className="favMovie_container">
          <div className="favMovieImg_container">
            <Link to={`/movies/${id}/${moviePath}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${imageUrl}`}
                alt={title}
              />
            </Link>
          </div>

          <div className="favMovieTitle_container">
            <Link to={`/movies/${id}/${moviePath}`}>
              <h3>{title}</h3>
            </Link>
          </div>
          <div className="deleteBtn_container">
            <button className="removeBtn" onClick={() => handleDelete(id)}>
              <i
                className="fa fa-close"
                style={{ fontSize: "28px", color: "red" }}
              ></i>
            </button>
          </div>
        </div>

        <hr />
      </div>
    </>
  );
};
