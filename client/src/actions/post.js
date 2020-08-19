import axios from "axios";
import { setAlert } from "./alert";
import { GET_POSTS, POST_ERROR, ADD_POST } from "./types";

//Get posts
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
    dispatch(setAlert("Activities Added", "success"));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
