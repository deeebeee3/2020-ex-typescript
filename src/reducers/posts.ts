import { Posts, Action, ActionTypes } from "../actions";

//state has type of Posts[] and default value [] empty array
export const postsReducer = (
  state: Posts[] = [],
  action: Action
) => {
    switch (action.type) {
        case ActionTypes.fetchPosts:
            return action.payload;
        default:
            return state;
    }
};
