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

// export const fetchPosts = () => {
//   return {
//     type: "FETCH_POSTS",
//     payload: {},
//   };
// };

export const fetchPostsAsync = () => {
  return async (dispatch: Dispatch, getState: Store) => {
    const response = await api.get<Posts[]>("/posts");

    dispatch<FetchPostsAction>({
      type: ActionTypes.fetchPosts,
      payload: response.data,
    });
  };
};
