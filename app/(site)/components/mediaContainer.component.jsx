import React from 'react';
import RepeatedMedia from './repeatedMedia.component';

const MediaContainer = ({ projectImages }) => {
  return (
    <div>
      {projectImages.map((item, index) => (
        <RepeatedMedia 
          key={item._key} 
          item={item} 
          count={Math.floor(Math.random() * 11) + 10} // Random number between 10 and 20
          index={index}
        />
      ))}
    </div>
  );
};

export default MediaContainer;