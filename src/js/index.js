import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import get from 'lodash.get';

import Archive from './Archive';
import Single from './Single';
import MiniNav from './MiniNav';

import { appDidMount } from './store/actions';
import effects from './store/effects';
import reducer from './store/reducer';
import { getPostBySlug, getPosts } from './store/selectors';

import { ROOT_SELECTOR } from './constants';
import { withScrollToTop } from './utils/withScrollToTop';

const ScrollToTopSingle = withScrollToTop(Single);
const ScrollToTopArchive = withScrollToTop(Archive);

const INITIAL_STATE = {
  posts: [],
};

export class App extends React.Component {
  static propTypes = {
    termId: PropTypes.string.isRequired,
    termName: PropTypes.string.isRequired,
    termSlug: PropTypes.string.isRequired,
    termDescription: PropTypes.string.isRequired,
    basenamePrefix: PropTypes.string,
  };

  static defaultProps = {
    basenamePrefix: '',
  };

  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;
    this.dispatch = this.dispatch.bind(this);
    this.triggerEffect = this.triggerEffect.bind(this);
    this.getState = this.getState.bind(this);
  }

  componentDidMount() {
    this.dispatch(appDidMount(this.props.termId));
  }

  getState = () => ({ ...this.state });

  dispatch(action) {
    this.setState(state => reducer(state, action), () => this.triggerEffect(action));
  }

  triggerEffect(action) {
    if (action.type in effects) {
      effects[action.type](action, {
        dispatch: this.dispatch,
        getState: this.getState,
      });
    }
  }

  render = () => (
    <BrowserRouter basename={this.props.basenamePrefix}>
      <main className="SnapshotsMain">
        <Switch>
          <Route
            path="/snapshots/:name/"
            render={() => (
              <DocumentTitle title={this.props.termName}>
                <ScrollToTopArchive
                  posts={getPosts(this.state)}
                  termName={this.props.termName}
                  termDescription={this.props.termDescription}
                />
              </DocumentTitle>
            )}
          />

          <Route
            path="/snapshot/:slug/"
            render={({
              match: {
                params: { slug },
              },
            }) => {
              const post = getPostBySlug(this.state, slug);
              return (
                <DocumentTitle title={get(post, ['title', 'rendered'], document.title)}>
                  <div>
                    {post && post.image && <ScrollToTopSingle {...post} />}
                    <MiniNav
                      posts={getPosts(this.state)}
                      termName={this.props.termName}
                      termSlug={this.props.termSlug}
                    />
                  </div>
                </DocumentTitle>
              );
            }}
          />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export const startApp = () => {
  [...document.querySelectorAll(ROOT_SELECTOR)].forEach((root) => {
    ReactDOM.render(
      <App
        termName={root.getAttribute('data-term-name')}
        termId={root.getAttribute('data-term-id')}
        termSlug={root.getAttribute('data-term-slug')}
        termDescription={root.getAttribute('data-term-description')}
        basenamePrefix={root.getAttribute('data-basename-prefix') || ''}
      />,
      root,
    );
  });
};

export const start = async () => {
  if (!('fetch' in window)) {
    await import('whatwg-fetch');
  }

  startApp();
};

window.addEventListener('load', start);
