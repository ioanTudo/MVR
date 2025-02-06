import { useEffect, useState } from "react";

const useRecommendedMovieAndRecently = () => {
  const [recommended, setRecommended] = useState(
    JSON.parse(localStorage.getItem("recommendedMovies")) || []
  );
  const [recentlyViewed, setRecentlyViewed] = useState(
    JSON.parse(localStorage.getItem("recentlyViewedMovies")) || []
  );
  useEffect(() => {
    try {
      const movies =
        JSON.parse(localStorage.getItem("recentlyViewedMovies")) || [];
      if (movies) {
        setRecentlyViewed(movies);
      } else {
        setRecentlyViewed([]);
      }
    } catch (error) {
      console.error(
        "Error parsing 'recentlyViewedMovies' from localStorage:",
        error
      );
      setRecentlyViewed([]);
    }
  }, []);

  return {
    recommended,
    setRecommended,
    recentlyViewed,
    setRecentlyViewed,
  };
};
export default useRecommendedMovieAndRecently;
