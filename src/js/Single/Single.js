/* eslint react/no-danger: 0 */
import React from 'react';
import PropTypes from 'prop-types';

import { Facebook, Twitter } from '../svg';

const Single = ({
  title: { rendered: title },
  content: { rendered: content },
  excerpt: { rendered: excerpt },
  image: {
    media_details: {
      sizes: { large: image },
    },
  },
}) => (
  <article className="SnapshotsSingle">
    <header className="SnapshotsSingle__header">
      <div className="SnapshotsSingle__title-container">
        <h1 className="SnapshotsSingle__title" dangerouslySetInnerHTML={{ __html: title }} />
      </div>
      <img
        src={image.source_url}
        width={image.width}
        height={image.height}
        alt={title}
        className="SnapshotsSingle__image"
      />
    </header>
    <div dangerouslySetInnerHTML={{ __html: content }} />
    <footer className="SnapshotsSingle__share-band">
      <h2>Share</h2>
      <a
        target="_blank"
        href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
      >
        <Facebook />
      </a>
      <a
        target="_blank"
        href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${excerpt}`}
      >
        <Twitter />
      </a>
    </footer>
  </article>
);

Single.propTypes = {
  title: PropTypes.objectOf(PropTypes.any),
  content: PropTypes.objectOf(PropTypes.any),
  excerpt: PropTypes.objectOf(PropTypes.any),
  image: PropTypes.objectOf(PropTypes.any).isRequired,
};

Single.defaultProps = {
  title: {
    rendered: '',
  },
  content: {
    rendered: '',
  },
  excerpt: {
    rendered: '',
  },
};

export default Single;
