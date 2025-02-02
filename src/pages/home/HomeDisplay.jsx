import { FilterMovies } from "../../components/filter/FilterMovies";
import "./Home.css";
import { TemplatePageDisplay } from "../template/TemplatePageDisplay";

const HomeDisplay = () => {
  return (
    <TemplatePageDisplay>
      <div className="wrapper_page">
        <div className="filters_container">
          <FilterMovies />
        </div>
      </div>
    </TemplatePageDisplay>
  );
};

export default HomeDisplay;
