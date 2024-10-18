import React from 'react'

const Movie = ({ movie }) => {
  return (
<div class="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={movie.picture}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">
     {movie.title}
      <div class="badge badge-secondary">{movie.year}</div>
    </h2>
    <p>{movie.details}</p>
    <div class="card-actions justify-end">
      <div class="badge badge-outline">{movie.type}</div>
    </div>
  </div>
</div>
  )
}

export default Movie