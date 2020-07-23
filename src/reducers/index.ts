// export default (): {} => {
//   return {
//     dummyReducer: () => "dummyReducer",
//   };
// };

import { combineReducers } from "redux";

export const reducers = combineReducers({
  dummyReducer: () => "dummyReducer",
});
