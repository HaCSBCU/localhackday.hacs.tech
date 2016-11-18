'use strict';
import React from 'react';

require('styles//Nav.css');

const links = [
  {
    display: 'home',
    link: '/#/home'
  },
  {
    display: 'about',
    link: '/#/about'
  },
  {
    display: 'faq',
    link: '/#/faq'
  },
  {
    display: 'attend',
    link: 'http://bit.ly/localhackdaybcu'
  }
]
//build list of links
//reverse handles float:right error with css
const listItems = links.reverse().map((links) =>
  <li key={links.display}><a href={links.link}>{links.display}</a></li>
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
