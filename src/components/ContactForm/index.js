import React, { useRef } from 'react';
import './ContactForm.scss';

export default function Contact() {
  const uploadRef = useRef(null);

  const handleUploadClick = () => {
    uploadRef.current.click();
  }

  return (
    <div className='contact-form'>
      <form>
        <div>
          <fieldset>
            <legend>Who are you</legend>
            <div>
              <label className='contact-form__text--label' for='name'>Name</label>
              <input className='contact-form__text' type='text' name='name' id='name' />
            </div>
            <div>
              <label className='contact-form__text--label' for='email'>Email</label>
              <input className='contact-form__text' type='email' name='email' id='email' />
            </div>
            <div>
              <label className='contact-form__text--label' for='phone'>Phone Number</label>
              <input className='contact-form__text' type='text' name='phone' id='phone' />
            </div>
          </fieldset>
        </div>
        <fieldset>
          <legend>What do you want</legend>
          <div className='contact-form__checkboxes'>
            <label className='contact-form__checkbox-container'>
              <input type='checkbox' name='color' id='color' />Full color
              <span className='contact-form__checkbox-container--checkmark'></span>
            </label>
            <label className='contact-form__checkbox-container'>Black and grey
              <input type='checkbox' name='grey' id='grey' />
              <span className='contact-form__checkbox-container--checkmark'></span>
            </label>
            <label className='contact-form__checkbox-container'>Linework only
              <input type='checkbox' name='line' id='line' />
              <span className='contact-form__checkbox-container--checkmark'></span>
            </label>
            <label className='contact-form__checkbox-container'>Stipple work
              <input type='checkbox' name='stipple' id='stipple' />
              <span className='contact-form__checkbox-container--checkmark'></span>
            </label>
          </div>
          <div>
            <label className='contact-form__text--label' for='description'>Detailed description</label>
            <textarea className='contact-form__text' id='description' placeholder='Size, location, design' />
          </div>
          <div>
            <label className='contact-form__text--label' for='budget'>Budget</label>
            <input className='contact-form__text' type='text' id='budget' placeholder='$100-$5000' />
          </div>
          <div className='contact-form__upload'>
            <label className='contact-form__text--label' for='reference'>Reference image</label>
            <div className='contact-form__upload--button' role='button' onClick={() => handleUploadClick()}>Upload a file</div>
            <input type='file' id='reference' ref={uploadRef} />
          </div>
        </fieldset>
        <button className='contact-form__submit'>Submit</button>
      </form>
    </div>
  );
}
