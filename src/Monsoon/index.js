import React from 'react';
import './monsoon.scss';
import Image from './monsoon.jpg';
import '../index.scss';

function monsoon() {
  const text = {
    title: "MONSOON III",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Donec tincidunt ipsum augue.  In faucibus vehicula magna pulvinar aliquam. Cras aliquam feugiat lorem non auctor. Quisque sed lorem egestas mauris venenatis commodo eu id nibh. Ut porta libero sed semper faucibus."
  }

  return (
    <div className="background monsoon-background">
      <img className="image" src={Image} alt="Monsoon" />
      <div className="text">
        <div className="title">{text.title}</div>
        <p className="paragraph monsoon-paragraph">{text.paragraph}</p>
      </div>
    </div>
  );
}

export default monsoon;

