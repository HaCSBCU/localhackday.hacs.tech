'use strict';

import React from 'react';
import ReactMarkdown from 'react-markdown';


class PageComponent extends React.Component {
  render() {
    return (
      <div className="center">
        <div className={this.props.type + 'Content'}>
          <h1>{this.props.title}</h1>
            <ReactMarkdown source={this.props.content} className="pageMDContent"/>
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
