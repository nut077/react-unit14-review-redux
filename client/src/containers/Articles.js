import React from 'react'
import { lifecycle, withState, withHandlers, compose } from 'recompose'
import { Switch, Route, withRouter } from 'react-router-dom'
import { ArticleList, EditArticle } from '../components'
import { ArticleStore } from '../stores';

const Articles = ({ onEditArticle }) => (
  <div>
    <button
      type='button'
      onClick={() => ArticleStore.editArticle(1,
        {
          id: 1,
          title: 'My Article#155',
          content: 'My Content#155',
          authorId: 1
        }
      )}
    >
      Click me
    </button>
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
  </div>
);

export default compose(
  withRouter,
  withHandlers({
    onEditArticle: ({ history }) => (id, article) => {
      ArticleStore.editArticle(id, article);
      history.push('/articles');
    }
  }),
  withState('subscription', 'setSubscription', null),
  lifecycle({
    componentDidMount() {
      const subscription = ArticleStore.subscribe(
        () => this.forceUpdate()
      );
      this.props['setSubscription'](() => subscription);
    },
    componentWillUnmount() {
      this.props.subscription();
    }
  })
)(Articles)