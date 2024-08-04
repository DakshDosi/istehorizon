import React from 'react';
import technicaImage from './assets/TECHNICA.png'; 
import technicaImage1 from './assets/Tech2.png';

const TechnicaSlider = () => {
  return (
    <div className="overflow-hidden  bg-black">
      <div className="flex space-x-4 animate-scroll">
        {[...Array(4)].map((_, i) => (
          <React.Fragment key={i}>
            <img src={technicaImage} alt="Technica Logo" className="w-108 h-48 inline-block" />
            <img src={technicaImage1} alt="Technica Logo" className="w-48 h-48 inline-block" />
          </React.Fragment>
        ))}
      </div>
      <div className="flex space-x-4 animate-scroll absolute top-0">
        {[...Array(4)].map((_, i) => (
          <React.Fragment key={i}>
            <img src={technicaImage} alt="Technica Logo" className="w-108 h-48 inline-block" />
            <img src={technicaImage1} alt="Technica Logo" className="w-48 h-48 inline-block" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TechnicaSlider;
