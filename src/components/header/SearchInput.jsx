import { useContext } from "react";
import { QueryContext } from "../../contexts/contexts";

export const SearchInput = () => {
  const { query, setQuery } = useContext(QueryContext);
  return (
    <>
      <input
        type="text"
        value={query}
        placeholder="search movies.."
        onChange={(e) => {
          console.log(e.target.value);
          setQuery(e.target.value);
        }}
      />
    </>
  );
};
