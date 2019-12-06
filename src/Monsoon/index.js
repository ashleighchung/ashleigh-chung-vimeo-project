import React from 'react';
import Image from './monsoon.jpg';

import '../index.scss';
import './monsoon.scss';

function monsoon() {

  /* TEXT CONTENT */
  const text = {
    title: "MONSOON III",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Donec tincidunt ipsum augue.  In faucibus vehicula magna pulvinar aliquam. Cras aliquam feugiat lorem non auctor. Quisque sed lorem egestas mauris venenatis commodo eu id nibh. Ut porta libero sed semper faucibus."
  }

  /* IMPLEMENTATION OF TEXT CONTENT AND STRUCTURE OF COMPONENT */
  return (
    <div className="background monsoon-background">
      <img className="image" src={Image} alt="Monsoon" />
      <div className="text">
        <div className="title monsoon-title">{text.title}</div>
        <p className="paragraph monsoon-paragraph">{text.paragraph}</p>
      </div>
    </div>
  );
}

export default monsoon;

