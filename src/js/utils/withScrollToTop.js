import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Returns a higher-order component that scrolls the window to the top on mount.
 *
 * @param {React.Component} Component A React Component.
 * @return {React.Component} The modified component.
 */
export const withScrollToTop = OriginalComponent =>
  class ScrollToTop extends Component {
    static propTypes = {
      id: PropTypes.number,
    };

    static defaultProps = {
      id: null,
    };

    componentDidMount() {
      window.scrollTo(0, 0);
    }

    componentDidUpdate(prevProps) {
      if (prevProps.id && this.props.id && prevProps.id !== this.props.id) {
        window.scrollTo(0, 0);
      }
    }

    render = () => <OriginalComponent {...this.props} />;
  };
