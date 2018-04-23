import React from 'react'
import { compose } from 'recompose'
import { Switch, Route, withRouter } from 'react-router-dom'
import { ArticleList, EditArticle } from '../components'
import { editArticle } from '../actions';
import { connect } from '../lib';

const Articles = ({ articles, onEditArticle }) => (
  <div>
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
  </div>
);

export default compose(
  withRouter,
  connect(
    ({ articles }) => ({
      articles
    }),
    (dispatch, { history }) => ({
      onEditArticle(id, article) {
        dispatch(editArticle(id, article));
        history.push('/articles')
      }
    })
  )
)(Articles)