/* eslint react/no-danger: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import { Facebook, Twitter } from '../svg';

class Single extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      image: '',
    };
  }

  componentDidMount() {
    this.setImage();
  }

  componentDidUpdate() {
    if (this.state.image === '') {
      this.setImage();
    }
  }

  setImage() {
    let image = '';

    if (this.props['johnwatkins__wp-snapshots__image']) {
      this.setState({ image: this.props['johnwatkins__wp-snapshots__image'] });
      return;
    }

    image = get(this, ['props', 'image', 'media_details', 'sizes', 'large', 'source_url'], '');

    if (!image) {
      image = get(this, ['props', 'image', 'media_details', 'sizes', 'medium', 'source_url'], '');
    }

    if (image !== '') {
      this.setState({ image });
    }
  }

  render = () => {
    const {
      title: { rendered: title },
      content: { rendered: content },
      excerpt: { rendered: excerpt },
    } = this.props;

    return (
      <article className="SnapshotsSingle">
        <header className="SnapshotsSingle__header">
          <div className="SnapshotsSingle__title-container">
            <h1 className="SnapshotsSingle__title" dangerouslySetInnerHTML={{ __html: title }} />
          </div>
          <img src={this.state.image} alt={title} className="SnapshotsSingle__image" />
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
  };
}

Single.propTypes = {
  title: PropTypes.objectOf(PropTypes.any),
  content: PropTypes.objectOf(PropTypes.any),
  excerpt: PropTypes.objectOf(PropTypes.any),
  image: PropTypes.objectOf(PropTypes.any).isRequired,
  'johnwatkins__wp-snapshots__image': PropTypes.string,
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
  'johnwatkins__wp-snapshots__image': '',
};

export default Single;
