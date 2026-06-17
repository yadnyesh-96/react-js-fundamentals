import { useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    if (!movie) {
        return <h1>Loading...</h1>;
    }
    return (
        <div className="p-6">

            <img
                src={movie.Poster}
                alt={movie.Title}
                className="w-80 rounded"
            />

            <h1 className="text-4xl font-bold mt-4">
                {movie.Title}
            </h1>

            <p>Year: {movie.Year}</p>

            <p>IMDb Rating: {movie.imdbRating}</p>

            <p>Genre: {movie.Genre}</p>

            <p>Director: {movie.Director}</p>

            <p>Actors: {movie.Actors}</p>

            <p className="mt-4">
                {movie.Plot}
            </p>

        </div>
    );
}

export default MovieDetails;