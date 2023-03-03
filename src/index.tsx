import React from 'react';
import ReactDOM from 'react-dom';
import { Linktree, CHANNEL_TYPES } from 'linkees';

import './css/normalize.css';

const items = [
  {
    title: 'Telegram',
    subtitle: '@crowncitybets | Si tienes alguna consulta, este es el lugar indicado.',
    type: CHANNEL_TYPES.TELEGRAM,
    link: 'https://t.me/crowncitybets', //Telegram Pofile
  },
  {
    title: 'WhatsApp',
    subtitle: '(999) 262 6411 | ¿No tienes Telegram? Prueba nuestro canal secundario de atención.',
    type: CHANNEL_TYPES.WHATSAPP,
    link: 'https://bit.ly/wa-ccb', //WhatsApp Pofile
  },
  {
    title: 'Crown City Bets',
    subtitle: '¡Dale Click A Tu Suerte!',
    type: CHANNEL_TYPES.WEBSITE,
    link: 'https://crowncitybets.mx', // your personal website or portfolio link
  },
  {
    title: 'Facebook',
    subtitle: '@citybetsmx | Síguenos en Facebook',
    type: CHANNEL_TYPES.FACEBOOK,
    link: 'https://www.facebook.com/citybetsmx', //Facebook Pofile
  },
  {
    title: 'Instagram',
    subtitle: '@crowncitybets | Síguenos en Instagram',
    type: CHANNEL_TYPES.INSTAGRAM,
    link: 'https://www.instagram.com/crowncitybets/', //instagram profile link
  },
  {
    title: 'Twitter',
    subtitle: '@citybetsmx | Síguenos en Twitter',
    type: CHANNEL_TYPES.TWITTER,
    link: 'https://twitter.com/CityBetsMx', // twitter profile link
  },
  {
    title: 'TikTok',
    subtitle: '@citybetsmx | Síguenos en TikTok',
    type: CHANNEL_TYPES.YOUTUBE,
    link: 'https://www.tiktok.com/@citybetsmx', //youtube channel link
  },
];

ReactDOM.render(
  <React.StrictMode>
    <Linktree cardItems={items} />
  </React.StrictMode>,
  document.getElementById('root')
);
