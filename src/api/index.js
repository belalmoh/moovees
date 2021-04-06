import {getApiKey, getBaseURL} from '../config/config.api';
import axios from 'axios';


export async function getAllGenres() {
    const result = await axios.get(`${getBaseURL()}/genre/movie/list?api_key=${getApiKey()}`);
    return await result.data;
}

export async function getMoviesByGenre(genreId, page=1) {
    const result = await axios.get(`${getBaseURL()}/discover/movie?api_key=${getApiKey()}&with_genres=${genreId}&page=${page}`);
    return await result.data;
}

export async function getMovieDetails(movieId) {
    const result = await axios.get(`${getBaseURL()}/movie/${movieId}?api_key=${getApiKey()}`);
    return await result.data;
}

