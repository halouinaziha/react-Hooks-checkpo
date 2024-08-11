import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ movies, setMovie, filterTitle, filterRating, AddMovie}) => {
return (
        <div>
                <div style={{margin: "2rem"}}>
                <AddMovie />
                </div>

                <div className='movie-list'>
        {movies
        .filter((movie) => 
                movie.title
                .toLowerCase()
                .trim()

                .includes(filterTitle.toLowerCase().trim()) &&
                movie.rating  >= filterRating
                )
        
        .map((movie) => {
                return <MovieCard key={movies.id} movie={movie} />
        })}
                
         
        </div>
        </div>
)
}

export default MovieList;