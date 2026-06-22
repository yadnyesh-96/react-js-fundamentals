const apiKey = "6cebdc46";

export async function searchMovies(search) {
    const response = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&s=${search}`
    );

    const data = await response.json();

    return data;
}

export async function serachMovieDetails(id) {
    const response = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&i=${id}`
    );

    const data = await response.json();

    return data;
}