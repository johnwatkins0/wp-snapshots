import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Returns a higher-order component that scrolls the window to the top on mount.
 *
 * @param {React.Component} Component A React Component.
 * @return {React.Component} The modified component.
 */
export const withReplaceEditLink = (OriginalComponent, type) =>
  class ReplaceLink extends Component {
    static propTypes = {
      id: PropTypes.number,
      basename: PropTypes.string.isRequired,
    };

    static defaultProps = {
      id: null,
    };

    componentDidMount() {
      this.updateLink();
    }

    componentDidUpdate(prevProps) {
      if (prevProps.id && this.props.id && prevProps.id !== this.props.id) {
        this.updateLink();
      }
    }

    updateLink() {
      const editLink = document.querySelector('#wp-admin-bar-edit .ab-item');

      if (!editLink) {
        return;
      }

      if (type === 'post') {
        editLink.setAttribute(
          'href',
          `${this.props.basename}/wp-admin/post.php?post=${this.props.id}&action=edit`,
        );
        editLink.innerHTML = 'Edit Post';
      }

      if (type === 'category') {
        editLink.setAttribute(
          'href',
          `${this.props.basename}/wp-admin/term.php?taxonomy=snapshot-category&tag_ID=${
            this.props.id
          }&post_type=snapshot`,
        );
        editLink.innerHTML = 'Edit Category';
      }
    }

    render = () => <OriginalComponent {...this.props} />;
  };
