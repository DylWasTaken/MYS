import axios from "axios";
import {
  GET_POSTS,
  POST_ERROR,
  ADD_POST,
  DELETE_POST,
  GET_ALL_POSTS,
  GET_POST_TOTALS,
  GET_WALK_LEADERS,
  GET_RUN_LEADERS,
  GET_CYCLE_LEADERS,
  GET_SWIM_LEADERS,
  GET_HR_LEADERS
} from "./types";
import { setAlert } from "./alert";

//Get users posts
export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/log");
    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Delete posts
export const deletePost = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/log/${id}`);
    dispatch({
      type: DELETE_POST,
      payload: id,
    });
    window.location.reload(false);
    dispatch(setAlert("Activity Removed", "success"));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Add posts
export const addPost = ({ walk, run, cycle, swim, horseRiding }) => async (
  dispatch
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": localStorage.getItem("token"),
    },
  };
  const body = JSON.stringify({
    walk: parseFloat(walk),
    run: parseFloat(run),
    cycle: parseFloat(cycle),
    swim: parseFloat(swim),
    horseRiding: parseFloat(horseRiding),
  });
  try {
    const res = await axios.post("/api/log", body, config);

    dispatch({
      type: ADD_POST,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Get all posts
export const getAllPosts = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/log/all");
    dispatch({
      type: GET_ALL_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Get post totals for user
export const getPostTotals = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/log/me");
    dispatch({
      type: GET_POST_TOTALS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Get walk leaders stats
export const GWL = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/log/walk");
    dispatch({
      type: GET_WALK_LEADERS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Get run leaders stats
export const GRL = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/log/run");
    dispatch({
      type: GET_RUN_LEADERS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Get cycle leaders stats
export const GCL = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/log/cycle");
    dispatch({
      type: GET_CYCLE_LEADERS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Get swim leaders stats
export const GSL = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/log/swim");
    dispatch({
      type: GET_SWIM_LEADERS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Get horseriding leaders stats
export const GHL = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/log/hr");
    dispatch({
      type: GET_HR_LEADERS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};


