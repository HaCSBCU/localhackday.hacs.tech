'use strict';

import React from 'react';


require('styles//Page.css');

class PageComponent extends React.Component {
  render() {
    return (
      <div className="page">
        <div className="pageGradient">
          <div className="pageContent">
            <h1>{this.props.title}</h1>
            <p>

            </p>
          </div>
        </div>
      </div>
    );
  }
}


PageComponent.displayName = 'PageComponent';

PageComponent.defaultProps = {
  title: 'Page',
  content: 'Lorem ipsum dolor sit <a href="/">test</a>amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
};

// Uncomment properties you need
// PageComponent.propTypes = {};
// PageComponent.defaultProps = {};

export default PageComponent;
