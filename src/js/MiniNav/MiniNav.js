/* eslint react/no-danger: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MiniNavLink from './MiniNavLink';

const MiniNav = ({ posts, termName, termSlug }) => (
  <nav className="MiniNav">
    <h2>
      <Link
        href={`/snapshots/${termSlug}/`}
        to={`/snapshots/${termSlug}/`}
        dangerouslySetInnerHTML={{ __html: termName }}
      />
    </h2>
    <div className="MiniNav__grid">
      {posts.map(post => post.image && <MiniNavLink key={post.id} {...post} />)}
    </div>
  </nav>
);

MiniNav.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  termName: PropTypes.string.isRequired,
  termSlug: PropTypes.string.isRequired,
};

export default MiniNav;
