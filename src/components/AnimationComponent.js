'use strict';

import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

require('styles//Animation.css');

//Accepts prop called child in order to add animation
class AnimationComponent extends React.Component {
  render(){
    return (
      <ReactCSSTransitionGroup transitionName = "Animation"
 transitionAppear = {true} transitionAppearTimeout = {500}
 transitionEnter = {false} transitionLeave = {false}>
            {this.props.child}
        </ReactCSSTransitionGroup>
    );
  }
}

AnimationComponent.displayName = 'AnimationComponent';

// Uncomment properties you need
// AnimationComponent.propTypes = {};
// AnimationComponent.defaultProps = {};

export default AnimationComponent;
