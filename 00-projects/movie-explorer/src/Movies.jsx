
function Movies({movie}) {
    return (
        <div className="border rounded-lg p-4 shadow">
            <img
                src={movie.Poster}
                alt={movie.Title}
                className="w-full h-72 object-cover"
            />

            <h2 className="font-bold mt-2">
                {movie.Title}
            </h2>

            <p>{movie.Year}</p>
        </div>
    )
}

export default Movies;