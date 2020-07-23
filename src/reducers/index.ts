// export default (): {} => {
//   return {
//     dummyReducer: () => "dummyReducer",
//   };
// };

import { combineReducers } from "redux";
import { postsReducer } from './posts';

export const reducers = combineReducers({
  posts: postsReducer,
});
