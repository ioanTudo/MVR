import { useContext, useState } from "react";
import { CurrentPageContext } from "../../contexts/contexts";

export const Pagination = ({}) => {
  const { currentPage, setCurrentPage } = useContext(CurrentPageContext);
  return (
    <div className="pagination_container">
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        prev
      </button>
      <span>Current page: {currentPage}</span>
      <button onClick={() => setCurrentPage(currentPage + 1)}>next</button>
    </div>
  );
};
