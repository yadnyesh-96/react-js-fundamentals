import { Link } from "react-router-dom";

function MovieCard({ movie }) {
    return (
        <Link to={`/movie/${movie.imdbID}`}>
            <div className="border rounded-lg p-6 shadow">
                <img
                    src={movie.Poster}
                    alt={movie.Title}
                />
                <h2 className="font-bold mt-2">{movie.Title}</h2>
                <p className="font-bold">{movie.Year}</p>
            </div>
        </Link>
    )
}

export default MovieCard;