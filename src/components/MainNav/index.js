import React from 'react';
import { Link } from 'react-router-dom';
import './MainNav.scss';

export default function MainNav() {
  return (
    <div className='main-nav'>
      <nav className='main-nav__list--container'>
        <ul className='main-nav__list'>
          <li className='main-nav__list--item'>
            <Link className='main-nav__list--link' to='/'>Home</Link>
          </li>
          <li className='main-nav__list--item'>
            <Link className='main-nav__list--link' to='/portfolio'>Portfolio</Link>
          </li>
          <li className='main-nav__list--item'>
            <Link className='main-nav__list--link' to='/contact'>Contact</Link>
          </li>
          <li className='main-nav__list--item'>
            <a href='http://likehoneyprints.bigcartel.com/' target='_blank' className='main-nav__list--link'>Shop</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
