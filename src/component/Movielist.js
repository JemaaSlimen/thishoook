import React from 'react'
import MovieCard from './MovieCard'

const Movielist = ({films}) => {
    return (
        <div>
          {films.map((elmt) => 
              <MovieCard movie={elmt} />
          )}  
        </div>
    )
}

export default Movielist
