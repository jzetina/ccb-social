import React from 'react';

import '../../css/skeleton.css';
import '../../css/components.css';

function Footer(): JSX.Element {
  return (
    <div className="Footer container">
      <p>
        Regístrate gratis y obtén un bono de $500 con el código GRATIS500 |{' '}
        <a href={'https://crowncitybets.mx/'}>Crown City Bets</a>
      </p>
    </div>
  );
}

export default Footer;
