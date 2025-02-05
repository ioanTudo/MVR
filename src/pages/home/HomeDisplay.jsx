import { FilterMovies } from "../../components/filter/FilterMovies";
import "./Home.css";
import { TemplatePageDisplay } from "../template/TemplatePageDisplay";

const HomeDisplay = () => {
  return (
    <TemplatePageDisplay>
      <div>
        <FilterMovies />
      </div>
    </TemplatePageDisplay>
  );
};

export default HomeDisplay;
