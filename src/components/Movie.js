import React from "react";

const Movie = ({name, url}) => {
  
    return (
        <>
        <h2>
             <a href={url}>{name}</a>
             </h2>
        
        </>
    );
};


export default Movie;