import { movies } from "../../data";

import {
  SONRAKİ_FİLM,
  ÖNCEKİ_FİLM,
  ADD_FAVORİTE,
  REMOVE_FAVORİTE,
} from "../actions/index";

const initialState = {
  sira: 0,
  movies: movies,
  favMovies: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SONRAKİ_FİLM:
      return { ...state, sira: state.sira + 1 };
    case ÖNCEKİ_FİLM:
      return { ...state, sira: state.sira - 1 };
    case ADD_FAVORİTE:
      return {
        ...state,
        favMovies: [...state.favMovies, state.movies[state.sira]],
        movies: state.movies?.filter(
          (item) => item.id != state.movies[state.sira].id
        ),
        sira:
          state.movies.length - state.sira == 1
            ? state.sira == 0
              ? 0
              : state.sira - 1
            : state.sira,
      };
    case REMOVE_FAVORİTE: {
      const currentMovie = state.favMovies.find(
        (item) => item.id == action.payload
      );
      return {
        ...state,
        favMovies: state.favMovies?.filter((item) => item.id != action.payload),
        movies: [...state.movies, currentMovie],
      };
    }
    default:
      return state;
  }
};

export default reducer;
