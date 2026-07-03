import { Link } from "react-router-dom";
import { Heart, Star } from "lucide-react";
import useFavorites from "../src/hooks/useFavorites";

function MovieCard({
    movie,
    showFavorite = true,
    showRemove = false,
    onRemove,
}) {


    const { addFavorite, isFavorite } = useFavorites();

    function handleFavorite(e) {
        e.preventDefault();

        if (!isFavorite(movie)) {
            addFavorite(movie);
            alert("Added to Favorites");
        } else {
            alert("Movie already in Favorites");
        }
    }

    return (
        <Link to={`/movie/${movie.imdbID}`}>
            <div className="w-60 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer">

                {/* Poster */}
                <div className="relative">
                    <img
                        src={movie.Poster}
                        alt={movie.Title}
                        className="w-full h-72 object-cover"
                    />

                    {showFavorite && (
                        <button
                            onClick={handleFavorite}
                            className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:scale-110 transition"
                        >
                            <Heart
                                size={18}
                                className="text-red-500 fill-red-500"
                            />
                        </button>
                    )}
                </div>

                {/* Movie Info */}
                <div className="p-3">
                    <h2 className="font-semibold text-gray-800 truncate">
                        {movie.Title}
                    </h2>

                    <p className="text-gray-500 text-sm">
                        {movie.Year}
                    </p>

                    <div className="flex items-center gap-1 mt-2">
                        <Star
                            size={16}
                            className="text-yellow-400 fill-yellow-400"
                        />
                        <span className="font-semibold">8.7</span>
                    </div>

                    {showRemove && (
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                onRemove(movie.imdbID);
                            }}
                            className="mt-3 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
                        >
                            Remove
                        </button>
                    )}
                </div>
            </div>
        </Link>
    );
}

export default MovieCard;