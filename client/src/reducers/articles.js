import { CREATE_ARTICLE, EDIT_ARTICLE, DELETE_ARTICLE } from '../actions';

const initialState = [
  {id: 1, title: 'My Article#1', content: 'My Content#1'},
  {id: 2, title: 'My Article#2', content: 'My Content#2'},
  {id: 3, title: 'My Article#3', content: 'My Content#3'},
  {id: 4, title: 'My Article#4', content: 'My Content#4'},
  {id: 5, title: 'My Article#5', content: 'My Content#5'},
  {id: 6, title: 'My Article#6', content: 'My Content#6'}
];

export default (state = initialState, action) => {
 switch (action.type) {
   case CREATE_ARTICLE : {
     return [...state, action.article];
   }
   case EDIT_ARTICLE : {
     const index = state.findIndex(article => article.id === Number(action.article.id));
     const article = state[index];
     return [
       ...state.slice(index),
       {...article, ...action.article},
       ...state.slice(index + 1)
     ]
   }
   case DELETE_ARTICLE : {
     const index = state.findIndex(article => article.id === action.id);
     return [...state.slice(index), ...state.slice(index + 1)];
   }
   default: return state
 }
}