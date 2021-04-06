import { getAllGenres, getMovieDetails, getMoviesByGenre } from '../api'
import {getImgsBasePath} from '../config/config.api'

export const ACTIONS = {
    SET_IMGS_PATH: 'set_imgs_path',
    ADD_FETCHED_GENRES: 'add_fetched_genres',
    GET_GENRES: 'get_genres',
    SET_GENRE: 'set_genre',

    GET_MOVIES: 'get_movies',
    ADD_MOVIES: 'add_movies',
    GET_MORE_MOVIES: 'get_more_movies',
    SELECT_MOVIE: 'select_movie',
    CLEAR_SELECTED_MOVIE: 'clear_selected_movie',

    IS_AT_BOTTOM: 'is_at_bottom'
}

export const getGenres = () => { 
    return (dispatch) => {
        return getAllGenres().then((data) => {
            dispatch({type: ACTIONS.ADD_FETCHED_GENRES, payload: data.genres})
        }).catch(err => {throw (err)})
    }
}

export const getMovies = (genreId) => {
    return (dispatch) => {
        return getMoviesByGenre(genreId).then((data) => {
            dispatch({type: ACTIONS.GET_MOVIES, payload: data})
        }).catch(err => {throw (err)})
    }
}

export const setGenre = (genre) => {
    return {
        type: ACTIONS.SET_GENRE, 
        payload: genre
    }
}

export const selectMovie = (movieId) => {
    return (dispatch) => {
        return getMovieDetails(movieId).then((data) => {
            dispatch({type: ACTIONS.SELECT_MOVIE, payload: data})
        }).catch(err => {throw (err)})
    }
}

export const setImagesBasePath = () => {
    return {
        type: ACTIONS.SET_IMGS_PATH,
        payload: getImgsBasePath()
    }
}

export const setIsBottom = (flag) => {
    return {
        type: ACTIONS.IS_AT_BOTTOM,
        payload: flag
    }
}

export const clearSelectedMovie = () => {
    return {
        type: ACTIONS.CLEAR_SELECTED_MOVIE
    }
}

export const getMoreMovies = (genreId, page) => {
    return (dispatch) => {
        return getMoviesByGenre(genreId, page).then((data) => {
            dispatch({type: ACTIONS.GET_MORE_MOVIES, payload: {data, page}})
        }).catch(err => {throw (err)})
    }
}