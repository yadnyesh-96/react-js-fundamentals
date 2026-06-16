import { useEffect, useState } from "react";
import { searchMovies } from "../service/movieApi";

import Movies from "./Movies.jsx";


function Home() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        loadMovies();
    }, [])

    async function loadMovies() {
        const data = await searchMovies("batman");
        setMovies(data);
    }

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">
                Movie Explorer
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {movies.map((movie) => (
                    <Movies
                        key={movie.imdbID}
                        movie={movie}
                    />))
                }
            </div>
        </div>
    )
}

export default Home;