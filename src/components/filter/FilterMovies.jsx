import { useContext, useEffect, useState } from "react";
import { useMovieGenres } from "../../api/useMovieGenres";
import "./FilterMovies.css";
import { Link } from "react-router";
import { RecentlyViewed } from "../recentlyViewed/RecentlyViewedComponent";
import { useMoviesList } from "../../api/useMovieList";
import { Pagination } from "../pagination/Pagination";
import { CurrentPageContext, QueryContext } from "../../contexts/contexts";

import { discoverEndPoint } from "../../api/useSearch";
import { useSearch } from "../../api/useSearch";

export const FilterMovies = ({ id }) => {
  const { currentPage, setCurrentPage } = useContext(CurrentPageContext);
  const [selectedGenre, setSelectedGenre] = useState("");
  const { genreList = [] } = useMovieGenres();
  const { movieList = [] } = useMoviesList(selectedGenre, currentPage);
  const { query } = useContext(QueryContext);
  const { movieSearchList = [] } = useSearch(query, currentPage);

  const [viewed, setViewed] = useState([]);

  const handleAddToView = () => {
    setViewed([...viewed], id);
    console.log([...viewed]);
  };

  return (
    <>
      <div className="genre_wrapper">
        <div>{}</div>
        <label htmlFor="genre-type">Genres</label>
        <select
          name="genre-type"
          id="genre-type"
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          <option value={""}>Select a genre</option>
          {genreList.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <h1>Recently viewed</h1>
        {viewed.length > 0 ? (
          viewed.map((viewedItm) => {
            return (
              <RecentlyViewed
                imageUrl={viewedItm.imageUrl}
                id={viewedItm.id}
                title={viewedItm.title}
              />
            );
          })
        ) : (
          <p>you didnt recently viewed any movies</p>
        )}
      </div>

      <div className="movies_wrapper">
        {query
          ? movieSearchList.map((list) => {
              return (
                <Link
                  onClick={handleAddToView}
                  key={list.id}
                  className="linkToMovie"
                  to={`/movies/${list.id}/${list.original_title}`}
                >
                  <div
                    style={{
                      backgroundImage: ` url(
              https://image.tmdb.org/t/p/w500/${list.poster_path}
            )`,
                    }}
                    className="movie_container"
                    key={list.id}
                  >
                    <div className="title_container">
                      <span>{list.original_title}</span>
                    </div>
                  </div>
                </Link>
              );
            })
          : movieList.map((movie) => (
              <Link
                onClick={handleAddToView}
                key={movie.id}
                className="linkToMovie"
                to={`/movies/${movie.id}/${movie.original_title}`}
              >
                <div
                  style={{
                    backgroundImage: ` url(
              https://image.tmdb.org/t/p/w500/${movie.poster_path}
            )`,
                  }}
                  className="movie_container"
                  key={movie.id}
                >
                  <div className="title_container">
                    <span>{movie.original_title}</span>
                  </div>
                </div>
              </Link>
            ))}
      </div>
      <Pagination />
    </>
  );
};
