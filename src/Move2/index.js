import React from 'react';
import './move2.scss';
import Image from './move2.jpg';
import '../index.scss';

function move2() {
  const text = {
    title: "Move 2",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non vestibulum lacus. Mauris et interdum lectus. Aenean a erat at metus ultrices cursus et non quam. Morbi egestas euismod sapien et ultrices. Sed ac massa condimentum, suscipit."
  }
  return (
    <div className = "move2-window">
      <div className="background move2-background">
        <img className = "image" src = {Image} alt = "Move 2" />
        <div className = "text">
            <div className = "title move2-title">{text.title}</div>
            <p className = "paragraph beams-paragraph">{text.paragraph}</p>
        </div>
      </div>
    </div>
  );
}

export default move2;