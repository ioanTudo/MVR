import { SearchInput } from "./SearchInput";
import { Link } from "react-router";
import Logo from "../../images/film.png";

export const HeaderDisplay = () => {
  return (
    <header className="header_container">
      <nav className="nav">
        <ul className="ulNav_container">
          <div className="leftMenu_wrapper">
            <li>
              <Link to={"/"}>
                <img className="logo" src={Logo} alt="" />
              </Link>
            </li>
            <li>
              <Link className="home_li" to={"/"}>
                home
              </Link>
            </li>
            <li>
              <Link className="myList_li" to={"/fav-movies"}>
                my list
              </Link>
            </li>
          </div>
          <li>
            <SearchInput />
          </li>
        </ul>
      </nav>
    </header>
  );
};
