import { Posts, FetchPostsAction } from "../actions";
import { ActionTypes } from '../actions/types';

//state has type of Posts[] and default value [] empty array
export const postsReducer = (
  state: Posts[] = [],
  action: FetchPostsAction
) => {
    switch (action.type) {
        case ActionTypes.fetchPosts:
            return action.payload;
        default:
            return state;
    }
};
