import { Link } from "react-router-dom";


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
            <Link to={`/movie/${movie.imdbID}`}>
                <button className="border-2 bg-amber-500 text-blue-50 mx-5 py-1 px-3 rounded">Details</button>
            </Link>
        </div>

    )
}

export default MovieCard;