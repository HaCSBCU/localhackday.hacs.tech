'use strict';

require('normalize.css/normalize.css');
require('styles/App.css');
require('styles/Index.css')

import Hero from './HeroIndexComponent'
import Page from './PageComponent'
import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

var PageAbout = React.createClass({
  render: function() {
    return <Page />;
  }
});


class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Hero} />
        <Route path='/about' component={PageAbout} />
      </Router>
    )
  }
}


export default App;
