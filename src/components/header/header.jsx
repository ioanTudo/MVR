import { HeaderDisplay } from "./HeaderDisplay.jsx";
import "./Header.css";

export const Header = ({ query, setQuery }) => {
  return <HeaderDisplay query={query} setQuery={setQuery} />;
};
