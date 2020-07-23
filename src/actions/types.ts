import { FetchPostsAction, DeletePostAction } from "./posts";

export enum ActionTypes {
  fetchPosts,
  deletePost,
}

//type alias of unions 
export type Action = FetchPostsAction | DeletePostAction;
