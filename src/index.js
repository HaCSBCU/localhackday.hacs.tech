import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import Nav from './components/NavComponent'
import Footer from './components/FooterComponent'

// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Nav />, document.getElementById('nav'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
