import React from 'react';
import Image from './beams.jpg';

import '../index.scss';
import './beams.scss';

function beams() {

  /* TEXT CONTENT */
  const text = {
    title: "BEAMS",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non vestibulum lacus. Mauris et interdum lectus. Aenean a erat at metus ultrices cursus et non quam. Morbi egestas euismod sapien et ultrices. Sed ac massa condimentum, suscipit mi vitae, facilisis turpis."
  }

  /* IMPLEMENTATION OF TEXT CONTENT AND STRUCTURE OF COMPONENT */
  return (
    <div className = "beams-window">
      <div className="background beams-background">
        <div className = "text beams-text">
            <div className = "title beams-title">{text.title}</div>
            <p className = "paragraph beams-paragraph">{text.paragraph}</p>
        </div>
        <img className = "image" src = {Image} alt = "Beams" />
      </div>
    </div>
  );
}

export default beams;