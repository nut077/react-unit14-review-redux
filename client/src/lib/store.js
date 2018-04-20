export default reducer => {

  let listeners = [];

  let state = {
    articles: [
      {id: 1, title: 'My Article#1', content: 'My Content#1', authorId: 1},
      {id: 2, title: 'My Article#2', content: 'My Content#2', authorId: 1},
      {id: 3, title: 'My Article#3', content: 'My Content#3', authorId: 2},
      {id: 4, title: 'My Article#4', content: 'My Content#4', authorId: 1},
      {id: 5, title: 'My Article#5', content: 'My Content#5', authorId: 2},
      {id: 6, title: 'My Article#6', content: 'My Content#6', authorId: 1}
    ],
    users: [
      {id: 1, name: 'name#1'},
      {id: 2, name: 'name#2'}
    ]
  };

  return {
    getState() {
      return state;
    },

    dispatch(action) {
      state = reducer(state, action);
      listeners.forEach(listener => listener());
    },

    subscribe(listener) {
      listeners.push(listener);
      return () => listeners = listeners.filter(list => list !== listener);
    }
  }
}