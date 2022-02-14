import React from 'react';
import PageTemplate from '../components/PageTemplate';
import ProfileImage from '../images/profile2.jpeg';
import './About.scss';

export default function About() {
  return (
    <PageTemplate title='About'>
      <div className='about'>
        <img
          className='about__photo'
          src={ProfileImage} 
          alt='Sarina in purple lighting'
        />
        <div className='about__text'>
          <p>Creating a safe and comfortable environment for every tattoo enthusiast. Sarina Keys has spent the last two years fine tuning her art to create a style that is truly unique and her own.</p>
          <p>Specializing but not limited to Full Color Manga, Retro, Cartoons, Gamer and nostalgia pieces as well as trained in Japanese and traditional design work.</p>
        </div>
      </div>
    </PageTemplate>
  );
}
