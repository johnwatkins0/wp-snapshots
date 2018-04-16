import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { ROOT_SELECTOR } from './constants';

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
