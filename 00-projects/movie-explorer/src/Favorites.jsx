import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

function Favorite() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const savedFavorites =
            JSON.parse(
                localStorage.getItem("favorites")
            ) || [];

        setFavorites(savedFavorites);
    }, []);

    function handleRemoveMov(movieId) {
        const updatedFavorites = favorites.filter(
            movie => movie.imdbID !== movieId
        );

        setFavorites(updatedFavorites);

        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
    return (
        <>
            <div className="p-6">
                <h2>Favorites({favorites.length})</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {favorites.map((movie) => (
                        <div key={movie.imdbID}>
                            <MovieCard movie={movie} />

                            <button onClick={() => handleRemoveMov(movie.imdbID)}>
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Favorite;