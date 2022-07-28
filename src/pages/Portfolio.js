import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PageTemplate from '../components/PageTemplate';
import ImageGallery from '../components/ImageGallery';

export default function Portfolio() {
  return (
    <PageTemplate title='Portfolio'>
      <ImageGallery />
    </PageTemplate>
  );
}
