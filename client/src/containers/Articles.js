import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ArticleList, CreateArticle, EditArticle, ShowArticle } from '../components';

const Articles = () => (
  <div>
    <Switch>
      <Route path='/articles/new' component={CreateArticle} />
      <Route path='/article/:id/edit' component={EditArticle} />
      <Route path='/article/:id' component={ShowArticle} />
      <Route path='/articles' component={ArticleList} />
      <Route path='/' component={ArticleList} />
    </Switch>
  </div>
);

export default Articles