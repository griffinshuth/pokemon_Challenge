
import React from 'react';

const PaginationButton = ({
  page,
  totalPages,
  setPage,
  type = 'Next' | 'Previous'
}) => (
  <button
    onClick={() => setPage(page)}
    disabled={totalPages === 0 || (type === 'Previous' ? page === 1 : page === totalPages)}
    className="px-4 py-2 mx-1 bg-gray-200 rounded hover:bg-gray-300"
  >
    {type}
  </button>
);

export default PaginationButton;
