import axios from "axios";
import {
  ADD_WATCH_FAIL,
  ADD_WATCH_LOAD,
  ADD_WATCH_SUCCESS,
  CLEAR_SUCCESS_WATCH,
  CLEAR_ERRORS_WATCH,
  GET_WATCHES_FAIL,
  GET_WATCHES_LOAD,
  GET_WATCHES_SUCCESS,
  GET_WATCHES_BYBRAND_LOAD,
  GET_WATCHES_BYBRAND_SUCCESS,
  GET_WATCHES_BYBRAND_FAIL,
} from "../actionTypes/watchActionTypes";

export const getWatches = () => async (dispatch) => {
  dispatch({ type: GET_WATCHES_LOAD });
  try {
    const result = await axios.get("/api/addWatches", newWatch);
    dispatch({ type: GET_WATCHES_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({
      type: GET_WATCHES_FAIL,
      payload: error.response?.data || error.message,
    });
  }
};

export const getWatchesByBrand = (brand) => async (dispatch) => {
  dispatch({ type: GET_WATCHES_BYBRAND_LOAD });
  try {
    const result = await axios.get("/api/watch/getWatchByBrand",  { params: { brand } });
    dispatch({ type: GET_WATCHES_BYBRAND_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({
      type: GET_WATCHES_BYBRAND_FAIL,
      payload: error.response.data,
    });
  }
};

export const addWatch = (newWatch) => async (dispatch) => {
  dispatch({ type: ADD_WATCH_LOAD });
  try {
    const result = await axios.post("/api/addWatch", newWatch);
    dispatch({ type: ADD_WATCH_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({
      type: ADD_WATCH_FAIL,
      payload: error.response?.data || error.message,
    });
  }
};

export const clearSuccessWatch = () => ({
  type: CLEAR_SUCCESS_WATCH,
});

export const clearErrorsWatch = () => ({
  type: CLEAR_ERRORS_WATCH,
});
