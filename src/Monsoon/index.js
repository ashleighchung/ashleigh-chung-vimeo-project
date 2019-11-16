import React from 'react';
import './monsoon.scss';
import Image from './monsoon.jpg';

function monsoon() {
  return (
    <div className="background monsoon-background">
        <img className = "image" src = {Image} alt = "monsoon" />
        <div className = "text">
            <text className = "title">MONSOON III</text>
            <p className = "paragraph monsoon-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non vestibulum lacus. Mauris et interdum lectus. Aenean a erat at metus ultrices cursus et non quam. Morbi egestas euismod sapien et ultrices. Sed ac massa condimentum, suscipit mi vitae, facilisis turpis. </p>
        </div>
    </div>
  );
}

export default monsoon;


/*import React from 'react';
import './monsoon.scss';
import Image from './monsoon.jpg';

function monsoon() {
  return (
    <div className="background monsoon-background">
      <img className = "monsoon-image" src = {Image} alt = "monsoon" />
      <div className = "text">
          <text className = "monsoon-title">MONSOON III</text>
          <p className = "paragraph monsoon-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non vestibulum lacus. Mauris et interdum lectus. Aenean a erat at metus ultrices cursus et non quam. Morbi egestas euismod sapien et ultrices. Sed ac massa condimentum, suscipit mi vitae, facilisis turpis. </p>
      </div>
    </div>
  );
}

export default monsoon;
*/