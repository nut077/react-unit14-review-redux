import { saveState } from "../lib";

export default store => dispatch => action => {
  const result = dispatch(action);
  saveState(store.getState());
  return result;
};