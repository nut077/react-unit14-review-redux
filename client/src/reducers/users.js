import { EDIT_USER } from '../actions';

const initialState = [
  {id: 1, name: 'name#1'},
  {id: 2, name: 'name#2'}
];

export default (state = initialState, action) => {
  switch (action.type) {
    case EDIT_USER:
      return state.map(
        item => item.id === action.user.id ?
          { ...item, ...action.user } : item
      );
    default: return state
  }
}