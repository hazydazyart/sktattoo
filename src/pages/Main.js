import React from 'react';
import PageTemplate from '../components/PageTemplate';
import profile from '../images/profile.jpeg';
import border from '../images/decorations/transparentborder.png';
import './Main.scss';

export default function Main() {
  return (
    <PageTemplate>
      <div className='profile-page'>
        <div className='profile-container'>
          <div className='profile-pic' />
          <div className='profile-text'>
            <h2>About Sarina</h2>
            <p>Creating a safe and comfortable environment for every tattoo enthusiast. Sarina Keys has spent the last two years fine tuning her art to create a style that is truly unique and her own.</p>
            <p>Specializing but not limited to Full Color Manga, Retro, Cartoons, Gamer and nostalgia pieces as well as trained in Japanese and traditional design work.</p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
