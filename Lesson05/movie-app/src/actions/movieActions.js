import axios from "axios" 
export const FETCHED_MOVIES = "FETCHED_MOVIES"

export function fetchMovies () {
    return (dispatch)=>
    {
        axios.get("https://6471a9c06a9370d5a41a8874.mockapi.io/movies")
        .then((res)=>res.data)
        .then(data=>dispatch({type:FETCHED_MOVIES,payload:data}))
        .catch(err=>console.error(err))
    }
}