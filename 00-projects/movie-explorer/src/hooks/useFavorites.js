import { useState } from "react";

function useFavorites() {

    const [favorites, setFavorites] = useState([])

    return {
        favorites
    };
}

export default useFavorites;