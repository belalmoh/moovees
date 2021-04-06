import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux'
import {ACTIONS, getGenres, setGenre, getMovies, setImagesBasePath, selectMovie, setIsBottom, getMoreMovies, clearSelectedMovie} from './actions';

let initialState = {
    genres: [],
    selectedGenre: undefined,
    selectedMovie: {},
    imagesPath: "",
    movies: [],
    currentPage: 1,
    isBottom: false
}

function movies(state = initialState, action) {

    switch (action.type) {
        case ACTIONS.ADD_FETCHED_GENRES:
            let genres =  action.payload;
            return {...state, genres};

        case ACTIONS.SET_GENRE:
            return {...state, selectedGenre: action.payload};

        case ACTIONS.GET_MOVIES:
            let movies = action.payload.results;
            let currentPage = action.payload.page;
            return {...state, movies, currentPage};

        case ACTIONS.GET_MORE_MOVIES:
            let moreMovies = action.payload.data.results;
            console.log(action.payload.page);
            return {...state, currentPage: action.payload.page, movies: [...state.movies,...moreMovies]};

        case ACTIONS.SET_IMGS_PATH:
            let imagesPath = action.payload;
            return {...state, imagesPath}

        case ACTIONS.SELECT_MOVIE:
            let selectedMovie = action.payload;
            return {...state, selectedMovie}

        case ACTIONS.IS_AT_BOTTOM:
            let isBottom = action.payload;
            return {...state, isBottom}

        case ACTIONS.CLEAR_SELECTED_MOVIE:
            return {...state, selectedMovie: {}}
            
        default:
            return state;
    }
}

const store = createStore(movies, applyMiddleware(thunk));

function mapStateToProps(state) {
    return state;
}
  
function mapDispatchToProps(dispatch) {
    return {
        getAllGenres: () => {
            dispatch(getGenres())
            dispatch(setImagesBasePath())
        },
        setGenre: (genreId) => dispatch(setGenre(genreId)),
        
        getMovies: (genreId) => dispatch(getMovies(genreId)),
        selectMovie: (movieId) => dispatch(selectMovie(movieId)),
        getMoreMovies: (genreId, page) => dispatch(getMoreMovies(genreId, page)),
        clearSelectedMovie: () => dispatch(clearSelectedMovie()),

        setIsBottom: (flag) => dispatch(setIsBottom(flag))
    }
}

export {mapStateToProps, mapDispatchToProps, store};