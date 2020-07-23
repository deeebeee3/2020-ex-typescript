import { api } from "../apis";
import { Dispatch, Store } from "redux";
import { ActionTypes } from '../actions/types';

export interface Posts {
    id: number;
    title: string;
    body: string;
}

export interface FetchPostsAction {
    type: ActionTypes.fetchPosts;
    payload: Posts[]
}

export interface DeletePostAction {
  type: ActionTypes.deletePost;
  payload: number
}

export const deletePost = (id: number): DeletePostAction => {
  return {
    type: ActionTypes.deletePost,
    payload: id,
  };
};

export const fetchPostsAsync = () => {
  return async (dispatch: Dispatch, getState: Store) => {
    const response = await api.get<Posts[]>("/posts");

    dispatch<FetchPostsAction>({
      type: ActionTypes.fetchPosts,
      payload: response.data,
    });
  };
};
