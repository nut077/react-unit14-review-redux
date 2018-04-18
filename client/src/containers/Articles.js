import React from 'react'
import { withState, withHandlers, compose } from 'recompose'
import { Switch, Route, withRouter } from 'react-router-dom'
import { ArticleList, EditArticle } from '../components'

const Articles = ({ articles, onEditArticle }) => (
  <Switch>
    <Route
      exact
      path='/articles'
      render={() => <ArticleList articles={articles} />} />
    <Route
      path='/articles/:id/edit'
      render={
        ({ match: { params } }) =>
          <EditArticle
            {...articles.find(article => article.id === Number(params.id))}
            onSubmit={onEditArticle} />
      }
    />
  </Switch>
);

export default compose(
  withRouter,
  withState('articles', 'setArticles', [
    {id: 1, title: 'My Article#1', content: 'My Content#1', authorId: 1},
    {id: 2, title: 'My Article#2', content: 'My Content#2', authorId: 1},
    {id: 3, title: 'My Article#3', content: 'My Content#3', authorId: 2},
    {id: 4, title: 'My Article#4', content: 'My Content#4', authorId: 1},
    {id: 5, title: 'My Article#5', content: 'My Content#5', authorId: 2},
    {id: 6, title: 'My Article#6', content: 'My Content#6', authorId: 1},
  ]),
  withHandlers({
    onEditArticle: ({ history, articles, setArticles }) => (id, article) => {
      setArticles(
        articles.map(item => item.id === id ? {...item, ...article}: item)
      );
      history.push('/articles')
    }
  })
)(Articles)