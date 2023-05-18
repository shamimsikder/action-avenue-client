import React, { useEffect } from 'react';
import { Slide, } from 'react-awesome-reveal';

const ImageGallery = () => {

  const images = [
    { id: 1, src: 'https://i.ibb.co/ctrJwwZ/rsz-mulyadi-qcyobglsgjm-unsplash.png', alt: 'Image 1' },
    { id: 2, src: 'https://i.ibb.co/SsFZbcL/rsz-dragonball.png', alt: 'Image 2' },
    { id: 3, src: 'https://i.ibb.co/yW58z98/rsz-dc.png', alt: 'Image 3' },
    { id: 4, src: 'https://i.ibb.co/QrPVxt3/rsz-1ravi-palwe-6twvoeh89wy-unsplash.png', alt: 'Image 4' },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Image Gallery</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {images.map((image) => (
          <div className="rounded-lg overflow-hidden" key={image.id}>
            <Slide duration={1000}>
              <img src={image.src} alt={image.alt} className="w-full h-48 object-cover" />
            </Slide>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
