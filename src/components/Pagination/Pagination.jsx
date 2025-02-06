const Pagination = ({ loadMore }) => {
  return (
    <div className="loadMoreBtn_container">
      <button className="paginationBtn" onClick={loadMore}>
        Load more
      </button>
    </div>
  );
};

export default Pagination;
