import { api } from "../apis";
import { Dispatch, Store } from "redux";
import { ActionTypes } from '../actions/types';

interface Posts {
    id: number;
    title: string;
    body: string;
}

interface FetchTodosAction {
    type: ActionTypes.fetchPosts;
    payload: Posts[]
}

export const fetchPosts = () => {
  return {
    type: "FETCH_POSTS",
    payload: {},
  };
};

export const fetchPostsAsync = () => {
  return async (dispatch: Dispatch, getState: Store) => {
    const response = await api.get<Posts[]>("/posts");

    dispatch<FetchTodosAction>({
      type: ActionTypes.fetchPosts,
      payload: response.data,
    });
  };
};
