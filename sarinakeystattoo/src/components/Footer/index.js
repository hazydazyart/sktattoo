import React from 'react';
import './Footer.scss';
import InstagramLogo from '../../images/instagram.png';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__address'>
        <div>Sarina Keys @ Highmark Tattoo</div>
        <div>(425) 412 3864</div>
        <div>2109 196th St SW</div>
        <div>Lynnwood, Wa 98012</div>
      </div>
      <div className='footer__socials'>
        <a href='https://www.instagram.com/sarinakeys_tattoo/' aria-label='Instagram'>
          <img className='footer__socials--instagram' alt='Instagram logo' src={InstagramLogo} />
        </a>
      </div>
    </footer>
  );
}
