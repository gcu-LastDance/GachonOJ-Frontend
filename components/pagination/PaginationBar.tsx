import React, { useState } from "react";
import Pagination from "react-js-pagination";
import "./PaginationBar.css";

const PaginationBar = ({
  pageSize,
  totalElements,
  pageNo,
  setPageNo,
}: {
  pageSize: number;
  totalElements: number;
  pageNo: number;
  setPageNo: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const handlePageChange = (page: number) => {
    setPageNo(page);
  };
  return (
    <div className="flex">
      <Pagination
        activePage={pageNo}
        itemsCountPerPage={pageSize}
        totalItemsCount={totalElements}
        pageRangeDisplayed={10}
        prevPageText={"<"}
        nextPageText={">"}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default PaginationBar;
