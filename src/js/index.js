/* eslint react/no-danger: 0 */
import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import get from 'lodash.get';
import { parse } from 'qs';

import Archive from './Archive';
import Single from './Single';
import MiniNav from './MiniNav';

import { appDidMount } from './store/actions';
import effects from './store/effects';
import reducer from './store/reducer';
import { getPostBySlug, getPosts } from './store/selectors';

import { ROOT_SELECTOR } from './constants';
import { withScrollToTop } from './utils/withScrollToTop';
import { withReplaceEditLink } from './utils/withReplaceEditLink';

const ScrollToTopSingle = withScrollToTop(withReplaceEditLink(Single, 'post'));
const ScrollToTopArchive = withScrollToTop(withReplaceEditLink(Archive, 'category'));

const INITIAL_STATE = {
  posts: [],
};

export class App extends Component {
  static propTypes = {
    termId: PropTypes.string.isRequired,
    termName: PropTypes.string.isRequired,
    termSlug: PropTypes.string.isRequired,
    termDescription: PropTypes.string.isRequired,
    basenamePrefix: PropTypes.string,
    titleAppend: PropTypes.string,
  };

  static defaultProps = {
    basenamePrefix: '',
    titleAppend: '',
  };

  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;
    this.dispatch = this.dispatch.bind(this);
    this.triggerEffect = this.triggerEffect.bind(this);
    this.getState = this.getState.bind(this);
  }

  componentDidMount() {
    this.dispatch(appDidMount(this.props.termId, this.props.previewPost || null));
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
              <DocumentTitle title={this.props.termName + this.props.titleAppend}>
                <ScrollToTopArchive
                  posts={getPosts(this.state)}
                  termName={this.props.termName}
                  termDescription={this.props.termDescription}
                  basename={this.props.basenamePrefix}
                  id={Number(this.props.termId)}
                />
              </DocumentTitle>
            )}
          />

          <Route
            path="/snapshot/:slug/"
            component={({
              match: {
                params: { slug },
              },
            }) => {
              const post = getPostBySlug(this.state, slug);
              return (
                <DocumentTitle
                  key={get(post, 'id', '')}
                  title={get(post, ['title', 'rendered'], document.title) + this.props.titleAppend}
                >
                  <div>
                    <div className="SnapshotsMain__title-container">
                      <h1>
                        <Link
                          href={`/snapshots/${this.props.termSlug}/`}
                          to={`/snapshots/${this.props.termSlug}/`}
                          dangerouslySetInnerHTML={{ __html: this.props.termName }}
                        />
                      </h1>
                    </div>
                    {post &&
                      post.image && (
                        <ScrollToTopSingle {...post} basename={this.props.basenamePrefix} />
                      )}
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

          <Route
            path="/"
            component={({ location }) => {
              const search = location.search || '';
              const params = parse(search.replace('?', ''));
              if (!('preview' in params) || !('p' in params)) {
                return null;
              }

              if (!this.props.previewPost) {
                return null;
              }

              const post = this.state.posts.find(({ id }) => id === Number(params.p));
              return (
                <DocumentTitle
                  key={get(post, 'id', '')}
                  title={get(post, ['title', 'rendered'], document.title) + this.props.titleAppend}
                >
                  <div>
                    <div className="SnapshotsMain__title-container">
                      <h1>
                        <Link
                          href={`/snapshots/${this.props.termSlug}/`}
                          to={`/snapshots/${this.props.termSlug}/`}
                          dangerouslySetInnerHTML={{ __html: this.props.termName }}
                        />
                      </h1>
                    </div>
                    {post &&
                      post.image && (
                        <ScrollToTopSingle {...post} basename={this.props.basenamePrefix} />
                      )}
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
    render(
      <App
        termName={root.getAttribute('data-term-name')}
        titleAppend={root.getAttribute('data-title-append')}
        termId={root.getAttribute('data-term-id')}
        termSlug={root.getAttribute('data-term-slug')}
        termDescription={root.getAttribute('data-term-description')}
        basenamePrefix={root.getAttribute('data-basename-prefix').replace(/\/$/, '') || ''}
        previewPost={JSON.parse(root.getAttribute('data-preview-post'))}
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
