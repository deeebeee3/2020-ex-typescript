import { api } from "../apis";
import { Dispatch, Store } from "redux";

export const fetchPosts = () => {
  return {
    type: "FETCH_POSTS",
    payload: {},
  };
};

export const fetchPostsAsync = () => {
  return async (dispatch: Dispatch, getState: Store) => {
    const response = await api.get("/posts");

    dispatch({
      type: "FETCH_POSTS",
      payload: response.data,
    });
  };
};
