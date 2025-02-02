import { useContext } from "react";
import { FavouriteContext } from "../../contexts/contexts";
import { SearchInput } from "./SearchInput";
import { Link } from "react-router";

export const HeaderDisplay = (query, setQuery) => {
  return (
    <header className="header_container">
      <nav className="nav">
        <ul className="ulNav_container">
          <li>
            <Link to={"/"}>home</Link>
          </li>
          <li>
            <SearchInput query={query} setQuery={setQuery} />
          </li>
          <li>
            <Link to={"/fav-movies"}>my list</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
