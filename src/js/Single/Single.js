/* eslint react/no-danger: 0 */
import React from 'react';
import PropTypes from 'prop-types';

const Single = ({
  title: { rendered: title },
  content: { rendered: content },
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
  </article>
);

Single.propTypes = {
  title: PropTypes.objectOf(PropTypes.any),
  content: PropTypes.objectOf(PropTypes.any),
  image: PropTypes.objectOf(PropTypes.any).isRequired,
};

Single.defaultProps = {
  title: {
    rendered: '',
  },
  content: {
    rendered: '',
  },
};

export default Single;
