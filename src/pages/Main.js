import React from 'react';
import PageTemplate from '../components/PageTemplate';
import profile from '../images/profile.jpeg';
import border from '../images/decorations/transparentborder.png';
import './Main.scss';

export default function Main() {
  return (
    <PageTemplate>
      <div className='profile-container'>
        <div className='profile-pic' />
      </div>
    </PageTemplate>
  );
}
