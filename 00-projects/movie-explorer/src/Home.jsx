import { useEffect, useState } from "react";
import { searchMovies } from "../service/movieApi";
import MovieCard from "../components/MovieCard";

function Home() {

    const [search, setSearch] = useState("batman");
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        loadMovies();
    }, [])

    async function loadMovies() {
        const data = await searchMovies(search);
        setMovies(data);
    }

    return (
        <div className="p-6">
            <div className="w-full my-5">
                <h1 className="text-3xl font-bold mb-6">Movie Explorer</h1>
                <input
                    type="text"
                    name=""
                    id=""
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border p-2 rounded-sm text-sm font-medium"
                    placeholder="Serach Movies Here"
                />

                <button
                    onClick={loadMovies}
                    className="border mx-2 p-1 px-2 rounded-sm font-bold bg-amber-200"
                >
                    Search
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.imdbID}
                        movie={movie}
                    />))
                }
            </div>
        </div>
    )
}

export default Home;