import React from "react";

const Pagination = ({ paginate, totalCharacters }) => {
  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCharacters / 30); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul style={{ backgroundColor: "#797596" }} className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
