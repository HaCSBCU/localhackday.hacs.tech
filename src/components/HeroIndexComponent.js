'use strict';

require('normalize.css/normalize.css');
require('styles/App.css');
require('styles/HeroIndex.css')

import React from 'react';


class HeroComponent extends React.Component {
  render() {
    return (
        <div className="hero">
          <div className="heroGradient">
            <div className="heroContent">
              <div className="heroContentImages">
                <img style={{width: 450, height: 180}} src="/images/Hacs-Logo-Full-White.png"></img>
                <img src="/images/localhack-day.svg"></img>
              </div>
              <div className="heroContentButtons">
                <button>Attend</button>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

HeroComponent.defaultProps = {
};

export default HeroComponent;
