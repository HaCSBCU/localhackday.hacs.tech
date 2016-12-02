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
      styles: [{'elementType':'labels','stylers':[{'visibility':'off'},{'color':'#f49f53'}]},{'featureType':'landscape','stylers':[{'color':'#f9ddc5'},{'lightness':-7}]},{'featureType':'road','stylers':[{'color':'#813033'},{'lightness':43}]},{'featureType':'poi.business','stylers':[{'color':'#645c20'},{'lightness':38}]},{'featureType':'water','stylers':[{'color':'#1994bf'},{'saturation':-69},{'gamma':0.99},{'lightness':43}]},{'featureType':'road.local','elementType':'geometry.fill','stylers':[{'color':'#f19f53'},{'weight':1.3},{'visibility':'on'},{'lightness':16}]},{'featureType':'poi.business'},{'featureType':'poi.park','stylers':[{'color':'#645c20'},{'lightness':39}]},{'featureType':'poi.school','stylers':[{'color':'#a95521'},{'lightness':35}]},{},{'featureType':'poi.medical','elementType':'geometry.fill','stylers':[{'color':'#813033'},{'lightness':38},{'visibility':'off'}]},{},{},{},{},{},{},{},{},{},{},{},{'elementType':'labels'},{'featureType':'poi.sports_complex','stylers':[{'color':'#9e5916'},{'lightness':32}]},{},{'featureType':'poi.government','stylers':[{'color':'#9e5916'},{'lightness':46}]},{'featureType':'transit.station','stylers':[{'visibility':'off'}]},{'featureType':'transit.line','stylers':[{'color':'#813033'},{'lightness':22}]},{'featureType':'transit','stylers':[{'lightness':38}]},{'featureType':'road.local','elementType':'geometry.stroke','stylers':[{'color':'#f19f53'},{'lightness':-10}]},{},{},{}]
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
    <Pointer lat={52.4792368} lng={-1.8955242} type='highlight' text={'LocalHackDay'} />
    <Pointer lat={52.4859368} lng={-1.8955242} text={'Station'} />
    <Pointer lat={52.4859368} lng={-1.8955242} text={'Birmingham City University'} />
     </GoogleMap>

    );
  }
}
