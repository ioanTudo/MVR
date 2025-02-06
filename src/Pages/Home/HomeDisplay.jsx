import { FilterMovies, Movies } from "../../Components/Movies/Movies";
import "./Home.css";
import { TemplatePageDisplay } from "../../Components/Templates/TemplatePage";

const HomeDisplay = () => {
  return (
    <TemplatePageDisplay>
      <div>
        <Movies />
      </div>
    </TemplatePageDisplay>
  );
};

export default HomeDisplay;
