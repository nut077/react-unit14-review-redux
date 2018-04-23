import articles from './articles'

function combineReducers(reducer) {
  return (state = {}, action) =>
    Object.keys(reducer).reduce(
      (result, key) =>
        ({ ...result, [key]: reducer[key](state[key], action)})
    , {})
}

export default combineReducers({
  articles
})