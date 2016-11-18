'use strict';

import React from 'react';
import PageContent from './PageContentComponent'
import AnimationComponent from './AnimationComponent'
require('styles//Page.css');

class PageComponent extends React.Component {
  render() {
    if (this.props.type === 'multi'){
      const multi = this.props.multi
      const listItems = multi.map( (multi) =>
        <PageContent type="multi" title={multi.title} content={multi.content}/>
      );
      return(
          <div className="page">
            <div className="pageGradient">
              <div className="multi">
              <AnimationComponent child={listItems} />
              </div>
            </div>
          </div>

      )
    }else {
      return (
        <div className="page">
          <div className="pageGradient">

            <AnimationComponent child={<PageContent type="page" title={this.props.title} content={this.props.content}/>} />

        </div>
        </div>
      );
    }
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
