import { Link } from "react-router";

export const RecentlyViewed = ({ id, title, imageUrl }) => {
  return (
    <div className="movies_wrapper">
      <Link className="linkToMovie" to={`/movies/${id}/${title}`}>
        <div
          style={{
            backgroundImage: ` url(
              https://image.tmdb.org/t/p/w500/${imageUrl}
            )`,
          }}
          className="movie_container"
          key={id}
        >
          <div className="title_container">
            <span>{title}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};
