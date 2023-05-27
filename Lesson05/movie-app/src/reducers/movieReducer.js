// Created by ''rxreducer' snippet

import { FETCHED_MOVIES, FETCHED_MOVIES_ERROR } from "../actions/movieActions";

const initialState = {
  movies:[],
  fetching:false,
  fetched:false,
  error:{}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCHED_MOVIES_PENDING":
    return {...state,fetching:true}
    case "FETCHED_MOVIES_FULFILLED":
      return { ...state, movies: payload,fetching:false,fetched:true };
      case "FETCHED_MOVIES_REJECTED":
        return {...state,error:payload,fetching:false}
    default:
      return state;
  }
};
