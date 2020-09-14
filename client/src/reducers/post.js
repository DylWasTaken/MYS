import {
  GET_POSTS,
  POST_ERROR,
  ADD_POST,
  GET_POSTS_BY_USER,
  DELETE_POST,
  GET_ALL_POSTS,
  GET_POST_TOTALS,
  GET_WALK_LEADERS,
  GET_RUN_LEADERS,
  GET_CYCLE_LEADERS,
  GET_SWIM_LEADERS,
  GET_HR_LEADERS,
} from "../actions/types";

const intialState = {
  logs: [],
  WL: [],
  RL: [],
  SL: [],
  CL: [],
  HRL: [],
  log: null,
  totals: [],
  loading: true,
  error: {},
};

export default function (state = intialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_POSTS:
    case GET_ALL_POSTS:
      return {
        ...state,
        logs: payload,
        loading: false,
      };
    case GET_POST_TOTALS:
      return {
        ...state,
        totals: payload,
      };
    case GET_POSTS_BY_USER:
      return {
        ...state,
        logs_by_user: payload,
        loading: false,
      };
    case GET_WALK_LEADERS:
      return {
        ...state,
        WL: payload,
      };
    case GET_RUN_LEADERS:
      return {
        ...state,
        RL: payload,
      };
    case GET_CYCLE_LEADERS:
      return {
        ...state,
        CL: payload,
      };
    case GET_SWIM_LEADERS:
      return {
        ...state,
        SL: payload,
      };
    case GET_HR_LEADERS:
      return {
        ...state,
        HRL: payload,
      };
    case ADD_POST: {
      return {
        ...state,
        logs: payload,
        loading: false,
      };
    }
    case DELETE_POST:
      return {
        ...state,
        logs: state.logs.filter((log) => log._id !== payload),
        loading: false,
      };

    case POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
