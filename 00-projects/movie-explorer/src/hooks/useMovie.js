import { useState, useEffect } from "react";


function useMovie() {
    const [movie, setMovie] = useState(null);
    const [Loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        loadMovie();
    }, [id]);

    async function loadMovie() {

        try {
            setLoading(true);
            setError("");
            const data = await serachMovieDetails(id);

            if (data.Response === "False") {
                setError(data.Error);
                return;
            }

            setMovie(data);
        } catch (err) {
            setError("Failed to load movie details");
        } finally {
            setLoading(false);
        }

    }

    return {
        movie,
        Loading,
        error
    };
}

export default useMovie;