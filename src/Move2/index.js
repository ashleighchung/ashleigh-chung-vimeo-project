import React from 'react';
import './move2.scss';
import Image from './move2.jpg';

function move2() {
  return (
    <div className="background move2-background">
       <img className = "move2-image" src = {Image} alt = "beams" />
       <div className = "text">
          <text className = "move2-title">Move 2</text>
          <p className = "paragraph beams-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non vestibulum lacus. Mauris et interdum lectus. Aenean a erat at metus ultrices cursus et non quam. Morbi egestas euismod sapien et ultrices. Sed ac massa condimentum, suscipit mi vitae, facilisis turpis. consectetur adipiscing elit. Sed non vestibulum lacus. Mauris et interdum lectus. Aenean a erat at metus ultrices cursus. </p>
       </div>
    </div>
  );
}

export default move2;