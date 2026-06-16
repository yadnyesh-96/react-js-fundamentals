

const apiKey = "6cebdc46";

export async function searchMovies(searchTerm) {
    const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}+&s=${searchTerm}`);

    const data = await response.json();
    console.log(data);

    return data.Search || [];
}