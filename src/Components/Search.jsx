import React from "react";
import "../index.css";
import { useGlobalContext } from "./Context";
const Search = () => {
  const {query, getSearchedData} = useGlobalContext();
  return (
    <div className="container">
      <form onSubmit={(e)=> e.preventDefault()}>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            className="search-box"
            value={query}
            onChange={(e) => getSearchedData(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
