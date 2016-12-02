/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import LocationComponent from 'components//LocationComponent.js';

describe('LocationComponent', () => {
  let component;

  beforeEach(() => {
    component = createComponent(LocationComponent);
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('location-component');
  });
});
