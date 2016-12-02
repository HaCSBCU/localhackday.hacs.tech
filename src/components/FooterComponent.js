'use strict';

import React from 'react';

require('styles//Footer.css');

const sponsor = [{
  name: 'Nexmo',
  image: 'nexmo.jpg',
  style: {
    width: 400
  },
  link: 'https://www.nexmo.com/'
},
{
  name: 'Packt',
  image: 'packt.jpg',
  style: {
    width: 328
  },
  link: 'https://www.packtpub.com/'
},
{
  name: 'Birmingham City University',
  image: 'bcu.jpg',
  style: {
    width: 300
  },
  link: 'http://bcu.ac.uk'
}
]
const sponsors = sponsor.map((sponsor) =>
  <a className='sponsorLink' href={sponsor.link}><img style={sponsor.style} key={sponsor.name} alt={sponsor.name} src={'images/sponsors/' + sponsor.image}></img></a>
)

class FooterComponent extends React.Component {
  render() {
    return (
      <div className="FooterComponent">
        <div className='FooterContainer'>
          <h1>LocalHackDay Birmingham is made possible thanks to:</h1>
          <div className='sponsors'>{sponsors}</div>
        </div>
        <div className='legal'>
          <p>&copy; 2016 Hackathon and Computing Society at BCU All Rights Reserved.</p>
          <p>All product and company names are trademarks™ or registered® trademarks of their respective holders. </p>
          <p>Site created by @PandelisZ</p>
        </div>

      </div>
    );
  }
}

FooterComponent.displayName = 'FooterComponent';

// Uncomment properties you need
// FooterComponent.propTypes = {};
// FooterComponent.defaultProps = {};

export default FooterComponent;
