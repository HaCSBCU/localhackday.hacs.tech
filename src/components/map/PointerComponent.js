'use strict';

import React from 'react';

require('styles/map/Pointer.css');


class PointerComponent extends React.Component {
  render() {
    return (
      <div className='mapPointer'>
        <div className='mapPointerText'>
          {this.props.text}
        </div>
      </div>
    );
  }
}

PointerComponent.displayName = 'MapPointerComponent';

// Uncomment properties you need
// PointerComponent.propTypes = {};
// PointerComponent.defaultProps = {};

export default PointerComponent;
