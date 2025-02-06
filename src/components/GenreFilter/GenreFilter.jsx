export const GenreFilter = ({ genreValue, genreList, setGenre }) => {
  return (
    <div className="filter_title_container">
      <div className="genre_wrapper">
        <select
          name="genre-type"
          id="genre-type"
          value={genreValue}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="">Select a genre</option>
          {genreList.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
