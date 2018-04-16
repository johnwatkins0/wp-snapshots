import React from 'react';

/**
 * Returns a higher-order component that scrolls the window to the top on mount.
 *
 * @param {React.Component} Component A React Component.
 * @return {React.Component} The modified component.
 */
export const withScrollToTop = Component =>
  class ScrollToTop extends React.Component {
    componentDidMount() {
      window.scrollTo(0, 0);
    }

    render = () => <Component {...this.props} />;
  };
