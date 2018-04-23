import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { ArticleList } from '../components';

const Articles = ({ articles }) => (
  <div>
    <Switch>
      <Route exact
             path='/'
             render={() => <ArticleList articles={articles} />}
      />
      <Route
        path='/articles'
        render={() => <ArticleList articles={articles} />}
      />
    </Switch>
    <button type='button'>Add article</button>
  </div>

);

export default compose(
  connect(
    ({ articles }) => ({ articles})
  )
)(Articles)