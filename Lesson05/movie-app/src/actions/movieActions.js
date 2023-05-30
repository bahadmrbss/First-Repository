import axios from "axios";
import { API_BASE } from "../config/env";
export const FETCHED_MOVIES = "FETCHED_MOVIES";
export const FETCHED_MOVIES_ERROR = "FETCHED_MOVIES_ERROR";

/* export function fetchMovies() {
  return (dispatch) => {
    axios
      .get('${API_BASE}/movies')
      .then((res) => res.data)
      .then(data => dispatch({ type: FETCHED_MOVIES, payload: data }))
      .catch(err => dispatch({ type: FETCHED_MOVIES_ERROR, payload: err }))
  };
}
*/

export function fetchMovies() {
  return (dispatch) => {
    dispatch({
      type: "FETCHED_MOVIES",
      payload: axios.get(`${API_BASE}/movies`).then((res) => res.data),
    });
  };
}

export function newMovies({title,cover}) {
  console.log("MovieAction",title,cover)
  return (dispatch) => 
  {
    dispatch({type: "NEW_MOVIES", payload: axios.post(`${API_BASE}/movies`,{title,cover})
    // .then(res => console.log("API POST RESULT:",res))});
    .then(res => res.data)});
  }
  }

