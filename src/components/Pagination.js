import React from 'react';

const Pagination = ({ currentPage, handlePageChange, totalPages }) => {
  return (
    <div className="d-flex justify-content-between">
      <button onClick={() => handlePageChange('prev')} disabled={currentPage === 1} className="btn btn-primary">
        Previous
      </button>
      <span>Page {currentPage} of {totalPages}</span>
      <button onClick={() => handlePageChange('next')} disabled={currentPage === totalPages} className="btn btn-primary">
        Next
      </button>
    </div>
  );
};

export default Pagination;
