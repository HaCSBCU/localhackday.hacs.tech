'use strict';

require('normalize.css/normalize.css');
require('styles/App.css');
require('styles/Index.css')

import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (

        <div className="hero">
          <div className="heroGradient">
            <div className="heroContent">
              <div className="heroContentImages">
                <img style={{width: 450, height: 180}} src="/images/Hacs-Logo-Full-White.png"></img>
                <img src="/images/localhack-day.svg"></img>
              </div>

              <div className="ticker">
                <h1 className="name"><span className="span-text">Hello There!</span></h1>
                <h1 className="name"><span className="span-text">I'm Pandelis</span></h1>
                <h1 className="name"><span className="span-text">Nice to meet you</span></h1>
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

AppComponent.defaultProps = {
};

export default AppComponent;
