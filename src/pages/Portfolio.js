import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PageTemplate from '../components/PageTemplate';
import ImageGallery from '../components/ImageGallery';

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get('https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,timestamp&access_token=IGQVJXbjBmODZAOZAG1ib3hlOXBMWmhjWTdFeUhoWDhFOEdaMmdLeUxGQm9jVzNrcE8wRWdLWFZAkYXd4ZA2dadmI0OW5sT0tnZAFBQa2ZARNUpuanJGWXRBcno0SUVHN1FaYU5jTDFMOUR5RzJUSmhQaUxjQwZDZD')
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
