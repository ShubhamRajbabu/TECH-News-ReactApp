import React from "react";
import { useGlobalContext } from "./Context";
import "../index.css";

const Pagination = () => {
  const { page, nbPages, getPrevPage, getNextPage } = useGlobalContext();
  return (
    <div className="container">
      <div className="pagination-container">
        <button className="page-button prev" disabled={page===0} onClick={()=>getPrevPage()}>
          &laquo; Prev
        </button>
        <p>{page+1} of {nbPages}</p>
        <button className="page-button next" disabled={page===nbPages-1} onClick={()=>getNextPage()}>Next &raquo;</button>
      </div>
    </div>
  );
};

export default Pagination;
