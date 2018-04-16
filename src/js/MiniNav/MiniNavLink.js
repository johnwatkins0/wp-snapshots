/* eslint react/no-danger: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const MiniNavLink = ({
  title: { rendered: title },
  image: {
    media_details: {
      sizes: { medium: image },
    },
  },
  slug,
}) => (
  <NavLink
    to={`/snapshot/${slug}/`}
    href={`/snapshot/${slug}/`}
    className="MiniNavLink"
    activeClassName="MiniNavLink--current"
    style={{ backgroundImage: `url('${image}')` }}
  >
    <img src={image.source_url} height={image.height} width={image.width} alt={title} />
  </NavLink>
);

MiniNavLink.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.objectOf(PropTypes.string).isRequired,
  image: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MiniNavLink;
