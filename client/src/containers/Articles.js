import React from 'react'
import { lifecycle, getContext, withState, withHandlers, compose } from 'recompose'
import PropTypes from 'prop-types'
import { Switch, Route, withRouter } from 'react-router-dom'
import { ArticleList, EditArticle } from '../components'
import { editArticle } from '../actions';

const Articles = ({ store, onEditArticle }) => (
  <div>
    <Switch>
      <Route
        exact
        path='/articles'
        render={() => <ArticleList articles={store.getState().articles} />} />
      <Route
        path='/articles/:id/edit'
        render={
          ({ match: { params } }) =>
            <EditArticle
              {...store.getState().articles.find(article => article.id === Number(params.id))}
              onSubmit={onEditArticle} />
        }
      />
    </Switch>
  </div>
);

export default compose(
  withRouter,
  getContext({
    store: PropTypes.object
  }),
  withHandlers({
    onEditArticle: ({ store, history }) => (id, article) => {
      store.dispatch(editArticle(id, article));
      history.push('/articles');
    }
  }),
  withState('subscription', 'setSubscription', null),
  lifecycle({
    componentDidMount() {
      const subscription = this.props.store.subscribe(
        () => this.forceUpdate()
      );
      this.props['setSubscription'](() => subscription);
    },
    componentWillUnmount() {
      this.props.subscription();
    }
  })
)(Articles)