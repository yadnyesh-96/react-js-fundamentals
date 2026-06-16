
function MovieCard({ movie }) {
    return (
        <div className="border rounded-lg p-6 shadow">
            <img
                src={movie.Poster}
                alt={movie.Title}
            />
            <h2 className="font-bold mt-2">{movie.Title}</h2>
            <p className="font-bold">{movie.year}</p>
        </div>
    )
}

export default MovieCard;