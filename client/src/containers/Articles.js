import React from 'react'
import { Route, Switch, Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { ArticleList, CreateArticle, EditArticle, ShowArticle } from '../components';

const Articles = ({ articles }) => (
  <div>
    <Switch>
      <Route
        exact
        path='/'
        render={() =>
          <div>
            <ArticleList articles={articles} />
            <Link to='/articles/new'>
              <button type="button">New article</button>
            </Link>
          </div>
        }
      />
      <Route
        exact
        path='/articles'
        render={() =>
          <div>
            <ArticleList articles={articles} />
            <Link to='/articles/new'>
              <button type="button">New article</button>
            </Link>
          </div>
        }
      />
      <Route
        path='/articles/new'
        component={CreateArticle}
      />
      <Route
        path='/article/:id/edit'
        render={({ match: {params} }) =>
          <EditArticle
            article={articles.find(article => article.id === Number(params.id))}
          />
        }
      />
      <Route
        path='/article/:id'
        render={({ match: {params} } ) =>
          <ShowArticle
            article={articles.find(article => article.id === Number(params.id))}
          />
        }
      />
    </Switch>
  </div>
);

export default compose(
  withRouter,
  connect(
    ({ articles }) => ({ articles})
  )
)(Articles)