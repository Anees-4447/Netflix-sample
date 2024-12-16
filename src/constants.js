export const API_KEY = "ec92ae3a154647697f4aad56d706edd9";
export const apiBaseUrl = "https://api.themoviedb.org/3/"
export const imageUrl = "https://image.tmdb.org/t/p/original/"

export const fetchTrending=`trending/all/week?api_key=${API_KEY}&language=en-US`

export const fetchNetflixOriginals=`discover/tv?api_key=${API_KEY}@with_networks=213`

export const fetchTopRated=`movie/top_rated?api_key=${API_KEY}&language=en-US`

export const fetchActionMovies= `discover/movie?api_key=${API_KEY}&with_genres=28`

export const fetchComedyMovies= `discover/movie?api_key=${API_KEY}&with_genres=35`

export const fetchHorrorMovies= `discover/movie?api_key=${API_KEY}&with_genres=27`

export const fetchRomanceMovies=`discover/movie?api_key=${API_KEY}&with_genres=10749`

export const fetchDocumentaries=`discover/movie?api_key=${API_KEY}&with_genres=99`
