import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './ImageGallery.scss';

export default function ImageGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  }

  return (
    <div className='image-gallery'>
      {images.map(image => {
        if (image.media_type !== 'VIDEO') {
          return (
            <button
              aria-label='View larger'
              className='image-gallery__button'
              onClick={() => handleImageClick(image)}
              key={image.id + '-button'}
            >
              <img
                className='image-gallery__image'
                src={image.media_url}
                alt={image.caption}
                title={image.caption}
                key={image.id}
              />
              <div className='image-gallery__view-larger'>View</div>
            </button>
          )
        }
      })}
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
              src={selectedImage.media_url}
            />
          </div>
          <div>{selectedImage.caption}</div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
