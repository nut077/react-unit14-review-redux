import React from 'react'
import { withHandlers, compose } from 'recompose'
import { Switch, Route, withRouter } from 'react-router-dom'
import { ArticleList, EditArticle } from '../components'
import { ArticleStore } from '../stores';

const Articles = ({ onEditArticle }) => (
  <Switch>
    <Route
      exact
      path='/articles'
      render={() => <ArticleList articles={ArticleStore.getState()} />} />
    <Route
      path='/articles/:id/edit'
      render={
        ({ match: { params } }) =>
          <EditArticle
            {...ArticleStore.getState().find(article => article.id === Number(params.id))}
            onSubmit={onEditArticle} />
      }
    />
  </Switch>
);

export default compose(
  withRouter,
  withHandlers({
    onEditArticle: ({ history }) => (id, article) => {
      ArticleStore.editArticle(id, article);
      history.push('/articles');
    }
  })
)(Articles)