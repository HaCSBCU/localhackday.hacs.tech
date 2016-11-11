'use strict';

import React from 'react';

require('styles//Nav.css');

const links = ['home', 'about', 'faq', 'attend', 'contact'];
//build list of links
//reverse handles float:right error with css
const listItems = links.reverse().map((links) =>
  <li key={links}><a href={'/' + links}>{links}</a></li>
);

class NavComponent extends React.Component {
  render() {
    return (
      <nav className="NavComponent">
        <ul>
          {listItems}
        </ul>
      </nav>
    );
  }
}

NavComponent.displayName = 'NavComponent';

// Uncomment properties you need
// NavComponent.propTypes = {};
// NavComponent.defaultProps = {};

export default NavComponent;
