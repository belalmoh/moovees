const config = {
    API_KEY: "f3d017cf1142262f0f6e80aeeb42c8ac",
    BASE_URL: "https://api.themoviedb.org/3",
    IMGS_BASE_PATH: "https://image.tmdb.org/t/p/w500"
}

let getApiKey = () => config.API_KEY
let getBaseURL = () => config.BASE_URL
let getImgsBasePath = () => config.IMGS_BASE_PATH

export {getApiKey, getBaseURL, getImgsBasePath};