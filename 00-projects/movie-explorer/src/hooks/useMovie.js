import { useState, useEffect } from "react";


function useMovie() {
    const [movie, setMovie] = useState(null);
    const [Loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    return {
        movie,
        Loading,
        error
    };
}

export default useMovie;