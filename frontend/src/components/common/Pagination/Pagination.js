import React from "react";

const Pagination = ({ count, page, perPage }) => {

  let totalPages = Math.ceil(count / perPage);
  let startLoop = page;
  let difference = totalPages - page;
  if (difference <= 4) {
    startLoop = totalPages - 4;
  }
  let endLoop = startLoop + 4;
  if (startLoop <= 0) {
    startLoop = 1;
  }
  return <div>

  </div>;
};

export default Pagination;
