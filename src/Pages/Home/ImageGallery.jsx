import React, { useEffect } from 'react';
import { Slide, } from 'react-awesome-reveal';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ImageGallery = () => {
  
  AOS.init();

  const images = [
    { id: 1, src: 'https://i.ibb.co/ctrJwwZ/rsz-mulyadi-qcyobglsgjm-unsplash.png', alt: 'Image 1' },
    { id: 2, src: 'https://i.ibb.co/SsFZbcL/rsz-dragonball.png', alt: 'Image 2' },
    { id: 3, src: 'https://i.ibb.co/yW58z98/rsz-dc.png', alt: 'Image 3' },
    { id: 4, src: 'https://i.ibb.co/QrPVxt3/rsz-1ravi-palwe-6twvoeh89wy-unsplash.png', alt: 'Image 4' },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto py-8">
      
      <div data-aos="fade-right" className='mb-10 text-center'>
            <p className='text-5xl font-semibold'>Image Gallery</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

        <div>
          <div className="rounded-lg overflow-hidden">
                  <Slide duration={1000}>
                    <img src="https://i.ibb.co/Bq0cDTm/rsz-1kin-li-sxrsif2dkqy-unsplash.jpg" className="w-full h-96 object-cover" />
                  </Slide>
                </div>
        </div>

        <div>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              {images.map((image) => (
                <div className="rounded-lg overflow-hidden" key={image.id}>
                  <Slide duration={1000}>
                    <img src={image.src} alt={image.alt} className="w-full h-[183.5px] object-cover" />
                  </Slide>
                </div>
              ))}
            </div>
        </div>

      </div>
    </div>
  );
};

export default ImageGallery;
