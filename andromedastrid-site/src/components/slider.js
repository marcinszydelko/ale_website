import React from 'react';
import { Fade } from 'react-slideshow-image';
 
const fadeImages = [
  'images/logo.png',
  'images/slide_6.jpg',
  'images/slide_7.jpg'
];
 
const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: false,
  indicators: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
}
 
const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade {...fadeProperties}>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} />
          </div>
          <h2>First Slide</h2>
        </div>
      </Fade>
    </div>
  )
}

export default Slideshow