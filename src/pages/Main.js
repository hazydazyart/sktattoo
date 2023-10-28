import React from 'react';
import PageTemplate from '../components/PageTemplate';
import profile from '../images/profile.jpeg';
import border from '../images/decorations/transparentborder.png';

export default function Main() {
  return (
    <PageTemplate>
      <div className='profile-image-container'>
        <img className='profile-image' src={profile} />
        <img className='profile-image__border' src={border} />
      </div>
    </PageTemplate>
  );
}
