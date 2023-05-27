// Created by ''rxreducer' snippet

import { FETCHED_MOVIES } from "../actions/movieActions";

const initialState = {
  movies:[],
  fetching:false,
  fetched:false,
  error:{}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCHED_MOVIES:
      return { ...state, movies: payload };
    default:
      return state;
  }
};
