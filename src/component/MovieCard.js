import React from 'react'
import StarRating from './StarRating';

const MovieCard = ({movie}) => {
    let{
        image,
        name,
        rating,
        date,
        desc
    }=movie;
    return (
        <div className="movie-card">
     <StarRating rate={rating}/>
          <img src={image} alt=""  ></img>
          <h1>{name}</h1>
          <p>{date}</p>
        </div>
    )
}

export default MovieCard
