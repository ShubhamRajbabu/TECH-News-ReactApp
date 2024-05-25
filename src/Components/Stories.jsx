import React from "react";
import { useGlobalContext } from "./Context";
import "../index.css";
import "../App.css";

const Stories = () => {
  const { hits, isLoading, removePost} = useGlobalContext();
  if (isLoading) {
    return (
      <>
        <h1>Loading...........</h1>
      </>
    );
  }
  return (
    <>
      <div className="container">
        {hits.map((currElem) => (
          <div className="card" key={currElem.objectID}>
            <h2 className="card-title">{currElem.title}</h2>
            <p className="card-description">
              By <span>{currElem.author}</span> | <span>{currElem.num_comments}</span>k
              comments
            </p>
            <div className='links'>
              <a href={currElem.url} target="_blank">
                Read More
              </a>
              <a href='#' style={{color:'#D11A2A'}} onClick={() =>removePost(currElem.objectID)}>Remove</a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Stories;
