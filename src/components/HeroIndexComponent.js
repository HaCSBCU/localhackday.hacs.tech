'use strict';

require('normalize.css/normalize.css');
require('styles/App.css');
require('styles/HeroIndex.css')

import React from 'react';
import AnimationComponent from './AnimationComponent'


class HeroComponent extends React.Component {
  render() {
    return (

        <div className="hero">
          <div className="heroGradient">
            <div className="heroContent">
              <AnimationComponent child={
                <div>
                  <div className="heroContentImages">
                    <img style={{width: 450, height: 180}} src="/images/Hacs-Logo-Full-White.png"></img>
                    <img src="/images/localhack-day.svg"></img>
                  </div>
                  <div className="heroContentButtons">
                    <a href="http://bit.ly/localhackdaybcu"><button>Attend</button></a>
                  </div>
                </div>
              } />
            </div>
          </div>
        </div>

    );
  }
}

HeroComponent.defaultProps = {
};

export default HeroComponent;
