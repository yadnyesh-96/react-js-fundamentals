import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { serachMovieDetails } from "../service/movieApi";

function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [Loading, serLoasding] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        loadMovie();
    }, [id]);

    async function loadMovie() {

        const data = await serachMovieDetails(id);
        setMovie(data);
    }


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

            <div><p className="font-bold text-amber-500">Year: </p> <p>{movie.Year}</p></div>

            <div><p className="font-bold text-amber-500">IMDb Rating: </p> <p>{movie.imdbRating}</p></div>

            <div><p className="font-bold text-amber-500">Genre: </p> <p>{movie.Genre}</p></div>

            <div><p className="font-bold text-amber-500">Director: </p> <p>{movie.Director}</p></div>

            <div><p className="font-bold text-amber-500">Actors: </p> <p>{movie.Actors}</p></div>

            <p className="mt-4">
                {movie.Plot}
            </p>

        </div>
    );
}

export default MovieDetails;