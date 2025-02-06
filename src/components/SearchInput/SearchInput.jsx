import { useContext } from "react";
import { QueryContext } from "../../Contexts/Contexts";

export const SearchInput = () => {
  const { query, setQuery } = useContext(QueryContext);
  return (
    <>
      <input
        type="text"
        value={query}
        placeholder="search movies.."
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
    </>
  );
};
