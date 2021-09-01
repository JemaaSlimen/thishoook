import React from 'react'
import ReactStars from "react-rating-stars-component";
const Search = ({handleSearch,handleRate}) => {
    const ratingChanged = (newRating) => {
      handleRate(newRating);
    };

    return (
        <div className="header-container">
            <h1>Movie our Time</h1>
            <div className="search-container" style={{backgroundImage:"green"}}>
             <input  className="inp"  type="text" placeholder="what do you watch"  onChange={(e)=>handleSearch(e.target.value)} />
             <ReactStars ount={5} size={25} onChange={ratingChanged}/>
            </div>
            
        </div>
    )
}

export default Search
