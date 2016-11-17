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
    var content = `
Local Hack Day is a 12 hour hack day on your school's campus that brings together the local hacker community to celebrate building **awesome** technology. On **December 3rd 2016**, other students around the world will be simultaneously hosting their own Local Hack Day at their school, resulting in the single largest day of student hacking ever. Throughout the day, there will be awesome chatrooms, and fun activities that you can use to meet students in your local community as well as across the globe. Whether you're a seasoned hackathon veteran or have never been to a hackathon before, Local Hack Day is the best way to kick off the 2017 MLH Hackathon Season.
`
    return <Page title="About LocalHackDay Birmingham" content={content} />;
  }
});

var PageFaq = React.createClass({
  render: function() {
    const arr = [{
      title: 'Hello',
      content: 'test'
    },
    {
      title: 'Number two',
      content: 'another test'
    }
  ]
    return (
      <div>
        <Page type="multi" multi={arr}/>
    </div>
  )
  }
});

class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Hero} />
        <Route path='home' component={Hero} />
        <Route path='about' component={PageAbout} />
        <Route path='faq' component={PageFaq} />
      </Router>
    )
  }
}


export default App;
