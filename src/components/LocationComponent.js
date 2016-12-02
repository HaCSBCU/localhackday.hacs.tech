'use strict';
import React, {PropTypes, Component} from 'react';

import GoogleMap from 'google-map-react';
import Pointer from './map/PointerComponent';


var defaultProps = {
  center: {lat: 59.938043, lng: 30.337157},
  zoom: 9,
  greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
};

var createMapOptions = (maps) => {
    return {
      panControl: false,
      mapTypeControl: false,
      scrollwheel: false,
      styles: [{'featureType':'all','elementType':'all','stylers':[{'hue':'#ff6800'},{'saturation':'20'},{'lightness':'-8'},{'gamma':'1.00'},{'weight':'1.12'}]}]
    }
  }


export default class SimpleMapPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <GoogleMap
        options={createMapOptions}
        defaultCenter={{lat: 52.4792368, lng: -1.8955242}}
        defaultZoom={15}
      >
    <Pointer lat={52.4831523} lng={-1.8834127} type='highlight' text={'LocalHackDay'} />
    <Pointer lat={52.477675} lng={-1.8981037} text={'Station'} />
     </GoogleMap>

    );
  }
}
