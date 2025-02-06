import { FilterMovies, Movies } from "../../components/Movies/Movies";
import "./Home.css";
import { TemplatePageDisplay } from "../../components/Templates/TemplatePage";

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
