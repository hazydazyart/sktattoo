import React, { useState } from 'react';
import picture1 from '../../images/portfolio/1.jpg';
import picture2 from '../../images/portfolio/2.jpg';
import picture3 from '../../images/portfolio/3.jpg';
import picture4 from '../../images/portfolio/4.jpg';
import picture5 from '../../images/portfolio/5.jpg';
import picture6 from '../../images/portfolio/6.jpg';
import picture7 from '../../images/portfolio/7.jpg';
import picture8 from '../../images/portfolio/8.jpg';
import picture9 from '../../images/portfolio/9.jpg';
import picture10 from '../../images/portfolio/10.jpg';
import picture11 from '../../images/portfolio/11.jpg';
import picture12 from '../../images/portfolio/12.jpg';
import Modal from 'react-bootstrap/Modal';
import './ImageGallery.scss';

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  }

  const images = [picture12, picture11, picture10, picture9, picture1, picture2, picture3, picture4, picture5, picture6, picture7, picture8];

  return (
    <div className='image-gallery'>
      <div className='column'>
        <button
          aria-label='View larger'
          className='image-gallery__button'
          onClick={() => handleImageClick(picture9)}
        >
          <img
            className='image-gallery__image'
            src={picture9}
          />
          <div className='image-gallery__view-larger'>View</div>
        </button>
        <button
          aria-label='View larger'
          className='image-gallery__button'
          onClick={() => handleImageClick(picture2)}
        >
          <img
            className='image-gallery__image'
            src={picture2}
          />
          <div className='image-gallery__view-larger'>View</div>
        </button>
        <button
          aria-label='View larger'
          className='image-gallery__button'
          onClick={() => handleImageClick(picture1)}
        >
          <img
            className='image-gallery__image'
            src={picture1}
          />
          <div className='image-gallery__view-larger'>View</div>
        </button>
        <button
          aria-label='View larger'
          className='image-gallery__button'
          onClick={() => handleImageClick(picture4)}
        >
          <img
            className='image-gallery__image'
            src={picture4}
          />
          <div className='image-gallery__view-larger'>View</div>
        </button>
      </div>
      <div className='column'>
        <button
          aria-label='View larger'
          className='image-gallery__button'
          onClick={() => handleImageClick(picture5)}
        >
          <img
            className='image-gallery__image'
            src={picture5}
          />
          <div className='image-gallery__view-larger'>View</div>
        </button>
        <button
          aria-label='View larger'
          className='image-gallery__button'
          onClick={() => handleImageClick(picture6)}
        >
          <img
            className='image-gallery__image'
            src={picture6}
          />
          <div className='image-gallery__view-larger'>View</div>
        </button>
        <button
          aria-label='View larger'
          className='image-gallery__button'
          onClick={() => handleImageClick(picture7)}
        >
          <img
            className='image-gallery__image'
            src={picture7}
          />
          <div className='image-gallery__view-larger'>View</div>
        </button>
        <button
          aria-label='View larger'
          className='image-gallery__button'
          onClick={() => handleImageClick(picture8)}
        >
          <img
            className='image-gallery__image'
            src={picture8}
          />
          <div className='image-gallery__view-larger'>View</div>
        </button>
      </div>
      <div className='column'>
        <button
          aria-label='View larger'
          className='image-gallery__button'
          onClick={() => handleImageClick(picture3)}
        >
          <img
            className='image-gallery__image'
            src={picture3}
          />
          <div className='image-gallery__view-larger'>View</div>
        </button>
        <button
          aria-label='View larger'
          className='image-gallery__button'
          onClick={() => handleImageClick(picture10)}
        >
          <img
            className='image-gallery__image'
            src={picture10}
          />
          <div className='image-gallery__view-larger'>View</div>
        </button>
        <button
          aria-label='View larger'
          className='image-gallery__button'
          onClick={() => handleImageClick(picture11)}
        >
          <img
            className='image-gallery__image'
            src={picture11}
          />
          <div className='image-gallery__view-larger'>View</div>
        </button>
        <button
          aria-label='View larger'
          className='image-gallery__button'
          onClick={() => handleImageClick(picture12)}
        >
          <img
            className='image-gallery__image'
            src={picture12}
          />
          <div className='image-gallery__view-larger'>View</div>
        </button>
      </div>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-label='Image closeup'
        dialogClassName='image-gallery-modal'
        size='xl'
        centered
      >
        <Modal.Header>
          <button
            className='image-gallery-modal__close-button'
            aria-label='Close'
            onClick={() => setShowModal(false)}
          />
        </Modal.Header>
        <Modal.Body>
          <div className='image-gallery-modal__body'>
            <img
              className='image-gallery-modal__image'
              src={selectedImage}
            />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
