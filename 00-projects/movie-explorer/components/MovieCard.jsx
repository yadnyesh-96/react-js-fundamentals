import { Link } from "react-router-dom";
import MovieDetails from "./MovieDetails";

function MovieCard({ movie }) {

    function handleFavorite(e) {
        e.preventDefault();
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

        const alreadyExists = favorites.some(
            fav => fav.imdbID === movie.imdbID
        );

        if (!alreadyExists) {
            favorites.push(movie);

            localStorage.setItem(
                "favorites", JSON.stringify(favorites)
            );

            alert("Added to Favorites");
        } else {
            alert("Movie already in Favorites");
        }
    }

    return (
        <Link to={`/movie/${movie.imdbID}`}>
            <div className="border rounded-lg p-6 shadow">
                <img
                    src={movie.Poster}
                    alt={movie.Title}
                />
                <h2 className="font-bold mt-2">{movie.Title}</h2>
                <p className="font-bold">{movie.Year}</p>
                <button
                    onClick={handleFavorite}
                    className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
                >
                    ❤️ Favorite
                </button>

                <button
                    onClick={MovieDetails}
                    className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
                >
                    Show Details
                </button>

                <MovieDetails movie={movie} />
            </div>
        </Link>
    )
}

export default MovieCard;