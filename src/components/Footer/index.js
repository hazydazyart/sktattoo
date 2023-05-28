import React from 'react';
import './Footer.scss';
import InstagramLogo from '../../images/instagram.png';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__address'>
        <div>Sarina Keys @ Colby Ave Tattoo</div>
        <div>(425) 658 2271</div>
        <div>2712 Colby Ave</div>
        <div>Everett, WA 98201</div>
      </div>
      <div className='footer__socials'>
        <a href='https://www.instagram.com/sarinakeys_tattoo/' aria-label='Instagram'>
          <img className='footer__socials--instagram' alt='Instagram logo' src={InstagramLogo} />
        </a>
      </div>
    </footer>
  );
}
