/* eslint react/no-danger: 0 */
import React from 'react';
import PropTypes from 'prop-types';

import NavLink from './NavLink';
import { Facebook, Twitter } from '../svg';

const Archive = ({ posts, termName, termDescription }) => (
  <nav className="SnapshotsArchive">
    <div className="SnapshotsArchive__intro">
      <h1 className="SnapshotsArchive__title" dangerouslySetInnerHTML={{ __html: termName }} />
      <p
        className="SnapshotsArchive__description"
        dangerouslySetInnerHTML={{ __html: termDescription }}
      />
      <div className="SnapshotsArchive__social">
        <a
          target="_blank"
          href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
        >
          <Facebook />
        </a>
        <a
          target="_blank"
          href={`https://twitter.com/intent/tweet?url=${
            window.location.href
          }&text=${termDescription}`}
        >
          <Twitter />
        </a>
      </div>
    </div>
    {posts.map((post, index) => post.image && <NavLink key={post.id} index={index} {...post} />)}
  </nav>
);

Archive.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  termName: PropTypes.string.isRequired,
  termDescription: PropTypes.string.isRequired,
};

export default Archive;
