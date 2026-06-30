import { useState, useEffect } from "react";

function useFavorites() {

    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const savedFavorites =
            JSON.parse(
                localStorage.getItem("favorites")
            ) || [];

        setFavorites(savedFavorites);
    }, []);

    function addFavorite(movie) {
        const updatedFavorites = [...favorites, movie];

        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }

    function isFavorite(movie) {
        return favorites.some((fav) => fav.imdbID === movie.imdbID);
    }

    function removeFavorite(movieId) {
        const updatedFavorites = favorites.filter(
            movie => movie.imdbID !== movieId
        );

        setFavorites(updatedFavorites);

        localStorage.setItem(
            "favorites",
            JSON.stringify(updatedFavorites)
        );
    }

    return {
        favorites,
        removeFavorite,
        addFavorite,
        isFavorite
    };
}

export default useFavorites;