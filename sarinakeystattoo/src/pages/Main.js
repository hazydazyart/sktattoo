import React from 'react';
import PageTemplate from '../components/PageTemplate';
import './Main.scss';
import HomePageImage from '../images/profile.jpeg';

export default function Main() {
  return (
    <PageTemplate>
        <div className='intro'>
          <img src={HomePageImage} alt='Sarina preparing to tattoo someone' />
        </div>
    </PageTemplate>
  );
}


