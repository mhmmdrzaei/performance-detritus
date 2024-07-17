import React from 'react';
import RepeatedMedia from './repeatedMedia.component';

const MediaContainer = ({ projectImages, snippet }) => {

  return (
    <>
      {projectImages.map((item) => {

        return (
        
            <RepeatedMedia 
              item={item} 
              snippet={snippet}
              count={11}
            />
        );
      })}
    </>
  );
};

export default MediaContainer;