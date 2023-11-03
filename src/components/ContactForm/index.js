import React, { useRef, useState } from 'react';
import { init, sendForm } from '@emailjs/browser';
import './ContactForm.scss';

export default function Contact() {
  const [message, setMessage] = useState('');
  const [hasError, setHasError] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [file, setFile] = useState();
  const uploadRef = useRef(null);
  const formRef = useRef(null);
  const pageRef = useRef(null);
  const maxImgSize = 50000;

  init('user_3AIpj3qJ9uTGbPExw1qby');

  const handleUploadClick = () => {
    uploadRef.current.click();
  }

  const sendEmail = (e) => {
    e.preventDefault();
    pageRef.current.scroll({
      top: 0,
      behavior: 'smooth'
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    if (file && file.size > 50000) {
      setMessage('Reference image must be 500kb or smaller.')
      setHasError(true)
    } else {
          setMessage("Thanks for your interest! I'll get back to you as soon as I can.")
          setHasError(false)
          setHasSubmitted(true)
      // sendForm('service_lcjhbpj', 'template_fxt1asb', formRef.current)
      //   .then((result) => {
      //     setMessage("Thanks for your interest! I'll get back to you as soon as I can.")
      //     setHasError(false)
      //     setHasSubmitted(true)
      //   }, (error) => {
      //       setMessage(error.text);
      //   });
    }
  };

  const changeHandler = (e) => {
    setFile(e.target.files[0]);
  };

  let messageClassName = 'contact-form__notification';

  if (hasError) messageClassName = 'contact-form__notification contact-form__notification--error'
  if (hasSubmitted) messageClassName = 'contact-form__notification contact-form__notification--success'

  return (
    <div className='contact-form' ref={pageRef}>
      <div className={messageClassName} aria-live='polite'>{message}</div>
      <form ref={formRef} onSubmit={sendEmail}>
        <div>
          <fieldset>
            <legend>Who are you</legend>
            <div>
              <label className='contact-form__text--label' htmlFor='name'>Name</label>
              <input className='contact-form__text' type='text' name='name' id='name' />
            </div>
            <div>
              <label className='contact-form__text--label' htmlFor='email'>Email</label>
              <input className='contact-form__text' type='email' name='email' id='email' />
            </div>
            <div>
              <label className='contact-form__text--label' htmlFor='phone'>Phone Number</label>
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
            <label className='contact-form__text--label' htmlFor='description'>Detailed description</label>
            <textarea className='contact-form__text' name='description' placeholder='Size, location, design' />
          </div>
          <div>
            <label className='contact-form__text--label' htmlFor='budget'>Budget</label>
            <input className='contact-form__text' type='text' name='budget' id='budget' placeholder='$100-$5000' />
          </div>
          <div className='contact-form__upload'>
            <label className='contact-form__text--label' htmlFor='reference'>Reference image</label>
            <div className='contact-form__upload-input'>
              <div className='contact-form__upload--button' role='button' onClick={() => handleUploadClick()}>Upload a file</div>
              <input type='file' id='reference' name='reference' ref={uploadRef} onChange={changeHandler} />
              {file && <div>{file.name}</div>}
            </div>
          </div>
        </fieldset>
        <button className='contact-form__submit'>Submit</button>
      </form>
    </div>
  );
}
