import React from 'react';
import './beams.scss';
import Image from './beams.jpg';

function beams() {
  return (
    <div className="background beams-background">
      <div className = "text beams-text">
          <text className = "beams-title">BEAMS</text>
          <p className = "paragraph beams-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non vestibulum lacus. Mauris et interdum lectus. Aenean a erat at metus ultrices cursus et non quam. Morbi egestas euismod sapien et ultrices. Sed ac massa condimentum, suscipit mi vitae, facilisis turpis. </p>
      </div>
      <img className = "beams-image" src = {Image} alt = "beams" />
    </div>
  );
}

export default beams;