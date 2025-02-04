import { FilterMovies } from "../../components/filter/FilterMovies";
import "./Home.css";
import { TemplatePageDisplay } from "../template/TemplatePageDisplay";
import { RecentlyViewed } from "../../components/recentlyViewed/RecentlyViewed";
import { RecommendedMovies } from "../../components/recommendedMovies/RecommendedMovies";
import { TrendingMovieList } from "../../components/trendingList/TrendingMovieList";

const HomeDisplay = () => {
  return (
    <TemplatePageDisplay>
      <div className="wrapper_page">
        <RecentlyViewed />
        <TrendingMovieList />
        <RecommendedMovies />
        <div className="filters_container">
          <FilterMovies />
        </div>
      </div>
    </TemplatePageDisplay>
  );
};

export default HomeDisplay;
