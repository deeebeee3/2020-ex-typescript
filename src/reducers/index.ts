// export default (): {} => {
//   return {
//     dummyReducer: () => "dummyReducer",
//   };
// };

import { combineReducers } from "redux";
import { postsReducer } from './posts';
import { Posts } from '../actions';

export interface StoreState {
  posts: Posts[]
}

export const reducers = combineReducers<StoreState>({
  posts: postsReducer,
});
