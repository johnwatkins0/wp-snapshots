/* eslint react/no-danger: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import get from 'lodash.get';

const getLargeOrMediumImageUrl = imageSizes =>
  get(imageSizes, ['large', 'source_url'], get(imageSizes, ['medium', 'source_url'], ''));

const NavLink = ({
  index,
  title: { rendered: title },
  excerpt: { rendered: excerpt },
  image: {
    media_details: { sizes: imageSizes },
  },
  slug,
}) => (
  <div className="SnapshotsNavLink" style={{ animationDelay: `.${index}s` }}>
    <Link to={`/snapshot/${slug}/`} href={`/snapshot/${slug}/`} className="SnapshotsNavLink__inner">
      <div
        style={{ backgroundImage: `url('${getLargeOrMediumImageUrl(imageSizes)}')` }}
        className="SnapshotsNavLink__front"
      >
        <h2 dangerouslySetInnerHTML={{ __html: title }} className="SnapshotsNavLink__title" />
      </div>
      <div className="SnapshotsNavLink__back">
        <p dangerouslySetInnerHTML={{ __html: excerpt }} />
      </div>
    </Link>
  </div>
);

NavLink.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.objectOf(PropTypes.string).isRequired,
  image: PropTypes.objectOf(PropTypes.any).isRequired,
  slug: PropTypes.string.isRequired,
  excerpt: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default NavLink;
