import React from "react"
import MovieCard from './MovieCard'

export default function MoviesList({ movieReducer }) {
  //console.log("MoveList Func Comp:::",props)
  const emptyMessage = <p>There are no movies yet.</p>;
  const moviesList = movieReducer.error.response ? (
    <h3>Error retrieving data!</h3>
  ) : (
    movieReducer.movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)
  );
  return <div>{movieReducer.length === 0 ? emptyMessage : moviesList}</div>;
}
