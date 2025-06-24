import {
  ADD_WATCH_FAIL,
  ADD_WATCH_LOAD,
  ADD_WATCH_SUCCESS,
  GET_ONE_WATCH_FAIL,
  GET_ONE_WATCH_LOAD,
  GET_ONE_WATCH_SUCCESS,
  GET_WATCHES_BYBRAND_FAIL,
  GET_WATCHES_BYBRAND_LOAD,
  GET_WATCHES_BYBRAND_SUCCESS,
  GET_WATCHES_FAIL,
  GET_WATCHES_LOAD,
  GET_WATCHES_SUCCESS,
} from "../actionTypes/watchActionTypes";

const initialState = {
  load: false,
  success: false,
  errors: null,
  watches: [],
  watch: {},
};
const watchReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_WATCHES_LOAD:
      return {
        ...state,
        load: true,
        success: null,
        errors: null,
      };
    case GET_WATCHES_SUCCESS:
      return {
        ...state,
        load: false,
        watches: action.watches,
        success: true,
        errors: null,
      };
    case GET_WATCHES_FAIL:
      return {
        ...state,
        load: false,
        watches: [],
        success: null,
        errors: payload.errors,
      };
    
      case GET_ONE_WATCH_LOAD:
      return {
        ...state,
        load: true,
        success: null,
        errors: null,
      };

    case GET_ONE_WATCH_SUCCESS:
      return {
        ...state,
        load: false,
        watch: payload.watch,
        success: payload.success,
        errors: null,
      };

    case GET_ONE_WATCH_FAIL:
      return {
        ...state,
        load: false,
        watch: {},
        success: null,
        errors: payload.errors,
      };

    case ADD_WATCH_LOAD:
      return {
        ...state,
        load: true,
        success: null,
        errors: null,
      };
    case ADD_WATCH_SUCCESS:
      return {
        ...state,
        load: false,
        success: payload.success,
        errors: null,
      };
    case ADD_WATCH_FAIL:
      return {
        ...state,
        load: false,
        success: null,
        errors: payload.errors,
      };
      case GET_WATCHES_BYBRAND_LOAD:
        return {
          ...state,
          load: true,
          success: null,
          errors: null,
        }
    case GET_WATCHES_BYBRAND_SUCCESS:
      return {
        ...state,
        load: false,
        watches: payload.watches,
        success: payload.message,
        errors: null,
      };
      case GET_WATCHES_BYBRAND_FAIL:
        return {
          ...state,
          load: false,
          watches: [],
          success: null,
          errors: payload.errors,
        };
    default:
      return state;
  }
};

export default watchReducer;
