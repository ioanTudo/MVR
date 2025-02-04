import { useContext } from "react";
import { SearchInput } from "./SearchInput";
import { Link } from "react-router";
import { FavouriteContext } from "../../contexts/contexts";

export const HeaderDisplay = () => {
  return (
    <header className="header_container">
      <nav className="nav">
        <ul className="ulNav_container">
          <li>
            <Link className="home_li" to={"/"}>
              home
            </Link>
          </li>
          <li>
            <SearchInput />
          </li>
          <li>
            <Link className="myList_li" to={"/fav-movies"}>
              my list
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
