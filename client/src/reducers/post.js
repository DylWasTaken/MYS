import { GET_POSTS, POST_ERROR, ADD_POST, GET_POSTS_BY_USER, DELETE_POST, GET_ALL_POSTS, GET_POST_TOTALS } from "../actions/types";

const intialState = {
  logs: [],
  log: null,
  totals:[],
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
    case GET_POSTS_BY_USER:
        return{
          ...state,
          logs_by_user: payload,
          loading: false
        }
    case ADD_POST: {
      return {
        ...state,
        logs: payload,
        loading: false,
      };
    }
    case DELETE_POST:
      return{
        ...state,
        logs: state.logs.filter(log => log._id !== payload),
        loading: false
      }

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
