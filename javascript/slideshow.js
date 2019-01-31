import React from 'react';
import { Zoom } from 'react-slideshow-image';
 
const images = [
  '../images/giraffe_paint.jpg',
  '../images/giraffe_paint.jpg',
  '../images/giraffe_paint.jpg',
];
 
const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
}
 
const Slideshow = () => {
    return (
      <Zoom {...zoomOutProperties}>
        {
          images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
        }
      </Zoom>
    )
}