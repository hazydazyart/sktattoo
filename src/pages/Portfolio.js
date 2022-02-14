import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PageTemplate from '../components/PageTemplate';
import ImageGallery from '../components/ImageGallery';

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get('https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,timestamp&access_token=IGQVJYUmEzRlpKdENicnRZAa01aU05VY292ZA2V5ZAHpXMV96WHNnSGNHcFJlWlZAQRXBZAd3VtWjVtN001ajJORjBwaUt4TXIwU296cEVQOEhvYlB2WWhwR2p0WjRxY0tsVmpNbXZAxd3FoTGQ3dnc1dzl3QgZDZD')
      .then(res => {
        setImages(res.data.data);
        setIsLoading(false);
      });
  }, []);

  return (
    <PageTemplate title='Portfolio'>
      {
        isLoading ?
          <div>Loading...</div> :
          <ImageGallery images={images} />
      }
    </PageTemplate>
  );
}
