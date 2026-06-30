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

    function handleRemoveMov(movieId) {
        const updatedFavorites = favorites.filter(
            movie => movie.imdbID !== movieId
        );

        setFavorites(updatedFavorites);

        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }

    return {
        favorites,
        handleRemoveMov
    };
}

export default useFavorites;