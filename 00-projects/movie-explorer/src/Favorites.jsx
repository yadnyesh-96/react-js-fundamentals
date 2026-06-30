
import MovieCard from "../components/MovieCard";
import useFavorites from "./hooks/useFavorites";

function Favorite() {
    const {favorites, removeFavorite} = useFavorites();

    return (
        <>
            <div className="p-6">
                <h2>Favorites({favorites.length})</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {favorites.map((movie) => (
                        <div key={movie.imdbID}>
                            <MovieCard
                                movie={movie}
                                showFavorite={false}
                                showRemove={true}
                                onRemove={removeFavorite} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Favorite;